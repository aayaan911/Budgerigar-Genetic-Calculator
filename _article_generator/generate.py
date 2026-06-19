"""Generate budgerigar mutation guide articles from the manto-negro template.

Usage:
    cd /path/to/budgerigargenetics.com
    python3 _article_generator/generate.py

Reads article_content.py from the same directory and writes one HTML file per
slug into blog/. Each generated article matches the exact structure of the
existing 21 articles on budgerigargenetics.com.
"""
import os
import re
import sys

# Auto-detect project root (parent of _article_generator/)
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJ = os.path.dirname(SCRIPT_DIR)
os.chdir(PROJ)

TEMPLATE_PATH = 'blog/manto-negro-budgerigar-mutation.html'
CONTENT_PATH = os.path.join(SCRIPT_DIR, 'article_content.py')

if not os.path.exists(TEMPLATE_PATH):
    sys.exit(f"Template not found: {TEMPLATE_PATH}. Run this from the project root.")
if not os.path.exists(CONTENT_PATH):
    sys.exit(f"Content file not found: {CONTENT_PATH}. Create article_content.py with META, SECTIONS, FAQS, REFS, RELATED dicts.")

with open(TEMPLATE_PATH, 'r', encoding='utf-8') as f:
    TPL = f.read()

# Load content dicts (META, SECTIONS, FAQS, REFS, RELATED)
exec(open(CONTENT_PATH).read(), globals())


def esc_quote(s):
    """Escape a string for safe inclusion in JSON strings."""
    return s.replace('"', '\\"').replace('\n', ' ')


def build(slug):
    """Build a complete HTML article for the given slug."""
    m = META[slug]
    secs = SECTIONS[slug]
    faqs = FAQS[slug]
    refs = REFS[slug]
    rel = RELATED[slug]
    url = f'https://budgerigargenetics.com/blog/{slug}'

    # FAQ JSON-LD
    faq_items = ','.join([
        '{"@type":"Question","name":"' + esc_quote(q) + '","acceptedAnswer":{"@type":"Answer","text":"' + esc_quote(a) + '"}}'
        for q, a in faqs
    ])
    faq_json = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[' + faq_items + ']}'

    # Article JSON-LD
    article_json = (
        '{"@context":"https://schema.org","@type":"Article","headline":"' + esc_quote(m['og_title'])
        + '","description":"' + esc_quote(m['og_desc'])
        + '","datePublished":"' + m['date_pub']
        + '","dateModified":"' + m['date_mod']
        + '","author":{"@type":"Person","name":"Ayaan Shohan","url":"https://budgerigargenetics.com/"}'
        + ',"publisher":{"@type":"Organization","name":"KinBird Aviary","logo":{"@type":"ImageObject","url":"https://budgerigargenetics.com/og-image.png"}}'
        + ',"mainEntityOfPage":"' + url + '","image":"https://budgerigargenetics.com/og-image.png"'
        + ',"about":' + m['about_json']
        + ',"keywords":"' + m['keywords'] + '","wordCount":' + str(m['wc'])
        + ',"articleSection":"Budgerigar Mutations","inLanguage":"en"}'
    )

    # BreadcrumbList JSON-LD
    bc_json = (
        '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":'
        + '[{"@type":"ListItem","position":1,"name":"Home","item":"https://budgerigargenetics.com/"}'
        + ',{"@type":"ListItem","position":2,"name":"Blog","item":"https://budgerigargenetics.com/blog/"}'
        + ',{"@type":"ListItem","position":3,"name":"' + m['short'] + '","item":"' + url + '"}]}'
    )

    # Body sections HTML
    sections_html = '\n\n'.join([
        f'<h2>{title}</h2>\n' + '\n'.join(f'<p>{p}</p>' for p in body.split('\n\n'))
        for title, body in secs
    ])

    # FAQ HTML
    faq_html = f'<h2>Frequently asked questions about {m["short"].lower()}</h2>\n' + '\n'.join([
        f'<h3>{q}</h3>\n<p>{a}</p>' for q, a in faqs
    ])

    # References HTML
    refs_html = '<div class="refs">\n<h3>References &amp; Further Reading</h3>\n<ol>\n' + '\n'.join([
        f'<li>{r}</li>' for r in refs
    ]) + '\n</ol>\n</div>'

    # Related articles HTML
    related_html = '<div class="refs">\n<h3>Related Blog Articles &amp; Guides</h3>\n<ul>\n' + '\n'.join([
        f'<li><a href="{href}">{label}</a></li>' for label, href in rel
    ]) + '\n<li><a href="/">Budgerigar Genetics Calculator (23+ documented mutations)</a></li>\n</ul>\n</div>'

    html = TPL

    # Replace meta tags
    html = re.sub(r'<title>[^<]*</title>', f'<title>{m["title"]} | KinBird Aviary</title>', html, count=1)
    html = re.sub(r'<meta name="description" content="[^"]*"/>', f'<meta name="description" content="{m["desc"]}"/>', html, count=1)
    html = re.sub(r'<meta name="keywords" content="[^"]*"/>', f'<meta name="keywords" content="{m["keywords"]}"/>', html, count=1)
    html = re.sub(r'<link rel="canonical" href="[^"]*"/>', f'<link rel="canonical" href="{url}"/>', html, count=1)
    html = re.sub(r'<meta property="og:url" content="[^"]*"/>', f'<meta property="og:url" content="{url}"/>', html, count=1)
    html = re.sub(r'<meta property="og:title" content="[^"]*"/>', f'<meta property="og:title" content="{m["og_title"]}"/>', html, count=1)
    html = re.sub(r'<meta property="og:description" content="[^"]*"/>', f'<meta property="og:description" content="{m["og_desc"]}"/>', html, count=1)
    html = re.sub(r'<meta property="article:published_time" content="[^"]*"/>', f'<meta property="article:published_time" content="{m["date_pub"]}"/>', html, count=1)
    html = re.sub(r'<meta property="article:modified_time" content="[^"]*"/>', f'<meta property="article:modified_time" content="{m["date_mod"]}"/>', html, count=1)
    html = re.sub(r'<meta property="article:tag" content="[^"]*"/>', f'<meta property="article:tag" content="{m["tags"]}"/>', html, count=1)

    # Replace JSON-LD blocks (Article, BreadcrumbList, FAQPage)
    html = re.sub(
        r'<script type="application/ld\+json">\n\{"@context":"https://schema\.org","@type":"Article".*?\}\n</script>',
        '<script type="application/ld+json">\n' + article_json + '\n</script>',
        html, count=1, flags=re.DOTALL
    )
    html = re.sub(
        r'<script type="application/ld\+json">\n\{"@context":"https://schema\.org","@type":"BreadcrumbList".*?\}\n</script>',
        '<script type="application/ld+json">\n' + bc_json + '\n</script>',
        html, count=1, flags=re.DOTALL
    )
    html = re.sub(
        r'<script type="application/ld\+json">\n\{"@context":"https://schema\.org","@type":"FAQPage".*?\}\n</script>',
        '<script type="application/ld+json">\n' + faq_json + '\n</script>',
        html, count=1, flags=re.DOTALL
    )

    # Replace breadcrumb final segment
    html = re.sub(
        r'(<a href="/blog/">Blog</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg> )[^<]*(</nav>)',
        lambda mm: mm.group(1) + m['short'] + mm.group(2),
        html, count=1
    )

    # Replace H1 + lead
    html = re.sub(r'<h1>[^<]*</h1>', f'<h1>{m["h1"]}</h1>', html, count=1)
    html = re.sub(r'<p class="lead">[^<]*</p>', f'<p class="lead">{m["lead"]}</p>', html, count=1)

    # Replace 3-column meta-grid
    meta_grid_cols = (
        f'<div class="meta-col"><span class="meta-col-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg> {m["date_label"]}</span><span class="meta-col-value">{m["date_value"]}</span></div>\n'
        + f'<div class="meta-col"><span class="meta-col-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg> Read time</span><span class="meta-col-value">{m["read_time"]}</span></div>\n'
        + f'<div class="meta-col"><span class="meta-col-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg> Origin</span><span class="meta-col-value">{m["origin"]}</span></div>'
    )
    html = re.sub(
        r'<div class="meta-col">.*?</div>\s*<div class="meta-col">.*?</div>\s*<div class="meta-col">.*?</div>',
        meta_grid_cols,
        html, count=1, flags=re.DOTALL
    )

    # Replace TL;DR
    html = re.sub(
        r'(<p class="tldr-label">TL;DR</p>\n)<p>[^<]*</p>',
        lambda mm: mm.group(1) + f'<p>{m["tldr"]}</p>',
        html, count=1
    )

    # Replace body sections + FAQ
    tldr_end = re.search(r'(<div class="tldr">.*?</div>)\s*\n', html, re.DOTALL)
    cta_start = re.search(r'<div style="background:rgba\(76,161,84,0\.06\);border:1px solid rgba\(76,161,84,0\.25\);border-radius:14px', html)
    if tldr_end and cta_start:
        body_start_idx = tldr_end.end()
        cta_start_idx = cta_start.start()
        new_body = '\n' + sections_html + '\n\n' + faq_html + '\n\n'
        html = html[:body_start_idx] + new_body + html[cta_start_idx:]

    # Replace CTA box description
    html = re.sub(
        r'(<p style="font-size:15px;color:var\(--text-2\);margin-bottom:20px;max-width:480px;margin-left:auto;margin-right:auto;">)[^<]*(</p>)',
        lambda mm: mm.group(1) + 'Budgerigar Genetics Calculator covering 23 documented mutations. Try the pairings shown in this article instantly.' + mm.group(2),
        html, count=1
    )

    # Replace References + Related sections
    refs_match = re.search(r'<div class="refs">', html)
    if refs_match:
        refs_start = refs_match.start()
        foot_match = re.search(r'<p class="foot">', html[refs_start:])
        if foot_match:
            refs_end = refs_start + foot_match.start()
            while refs_end > 0 and html[refs_end-1] in ' \n\t':
                refs_end -= 1
            html = html[:refs_start] + refs_html + '\n\n' + related_html + '\n\n' + html[refs_end:]

    return html


def main():
    if not META:
        sys.exit("No articles defined in META. Add at least one article to article_content.py.")

    for slug in META.keys():
        out_html = build(slug)
        out_path = f'blog/{slug}.html'
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(out_html)
        print(f"✓ Generated: {out_path} ({len(out_html)} bytes)")

    print(f"\n=== {len(META)} article(s) generated ===")
    print("\nNext steps (manual):")
    print("  1. Update blog/index.html with new card(s)")
    print("  2. Update sitemap.xml with new URL(s)")
    print("  3. Update llms.txt with new article reference(s)")
    print("  4. git add -A && git commit -m 'Add new article' && git push")


if __name__ == '__main__':
    main()
