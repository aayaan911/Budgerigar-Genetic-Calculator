# Budgerigar Genetic Article Generator

A reusable template system for generating new mutation guide articles on budgerigargenetics.com that match the existing 21 articles exactly in structure, SEO, and styling.

## What this generates

Each run produces a complete, deployment-ready HTML article with:

- Full `<head>` meta tags (title, description, keywords, canonical, OG, Twitter card)
- 3 JSON-LD schema blocks (Article, BreadcrumbList, FAQPage)
- Sticky brand header with theme toggle
- Breadcrumb navigation
- 3-column meta info grid (date / read time / origin)
- Author byline (Ayaan Shohan + Follow link)
- TL;DR card
- Long-form body sections with H2/H3 headings
- FAQ section (6 questions, schema-validated)
- "Plan your next pairing" CTA box
- References list
- Related blog articles list
- Footer

## How to use

### Step 1 — Edit the content file

Open `article_content.py` and define your new article. Each article needs four dicts keyed by URL slug:

```python
META = {
    'your-new-mutation-slug': {
        'title': 'Your Article Title | KinBird Aviary',
        'short': 'Short Name',  # appears in breadcrumb
        'desc': 'Meta description, 150-160 chars.',
        'keywords': 'comma, separated, keywords',
        'og_title': 'Open Graph title',
        'og_desc': 'Open Graph description',
        'date_pub': '2026-06-19',
        'date_mod': '2026-06-19',
        'wc': 2800,
        'tags': 'Tag1, Tag2, Tag3',
        'about_json': '[{"@type":"Thing","name":"..."}]',
        'date_label': 'Published',
        'date_value': 'June 19, 2026',
        'read_time': '10 min',
        'origin': 'Country, Year',
        'h1': 'Article H1 Title',
        'lead': 'Lead paragraph (1-3 sentences) shown after H1.',
        'tldr': 'TL;DR card content. 80-120 words summarizing the entire article.',
    },
}

SECTIONS = {
    'your-new-mutation-slug': [
        ('H2 Section Title', "Section body. Use double newlines to split paragraphs."),
        # ... 7-8 sections per article
    ],
}

FAQS = {
    'your-new-mutation-slug': [
        ('Question?', 'Answer.'),
        # ... 6 FAQs per article
    ],
}

REFS = {
    'your-new-mutation-slug': [
        'Reference 1 with <a href="..." target="_blank" rel="noopener noreferrer">link</a>',
        # ... 3-5 references per article
    ],
}

RELATED = {
    'your-new-mutation-slug': [
        ('Article title', '/blog/related-article-slug'),
        # ... 5 related articles per article
    ],
}
```

### Step 2 — Run the generator

```bash
cd /path/to/budgerigargenetics.com
python3 _article_generator/generate.py
```

This reads `article_content.py` and writes one HTML file per slug into `blog/`.

### Step 3 — Update site references

After generating, update these three files manually (the generator doesn't touch them):

1. **`blog/index.html`** — add a card for the new article at the top of the grid
2. **`sitemap.xml`** — add a `<url>` entry for the new article
3. **`llms.txt`** — add the article URL to the mutation guides list

### Step 4 — Deploy

```bash
git add -A
git commit -m "Add new article: [slug]"
git push origin main
```

Cloudflare auto-deploys in 30-60 seconds.

## Template source

The generator uses `blog/manto-negro-budgerigar-mutation.html` as the source template. To update the template structure for ALL future articles, edit that file — the generator picks up the new structure automatically.

## File structure

```
_article_generator/
├── README.md           ← this file
├── generate.py         ← builder script
├── article_content.py  ← define new articles here
└── example_article.py  ← reference example showing all fields
```

## Word count guidance

- **2000-2500 words** — for simple mutation explainers (single mutation, simple inheritance)
- **2500-3000 words** — standard mutation guides with combinations + judge rules
- **3000-3500 words** — comprehensive articles covering multiple related concepts

## Schema validation

All generated articles include three JSON-LD schemas:

- **Article** — for Google rich results
- **BreadcrumbList** — for breadcrumb navigation in search results
- **FAQPage** — for FAQ rich snippets + Google AI Overview targeting

Validate generated articles at https://search.google.com/test/rich-results before declaring done.

## Style notes

- No em-dashes (per site convention) — use commas or hyphens
- No emoji in article body (preserve for blog hub cards + launch posts only)
- Always cite Terry Martin (2002), Inte Onsman (MUTAVI), Cyril H. Rogers where applicable
- Cite WBO judges (Khedr, Hossain, Salim) for any judge-validated engine rules
- All H2s should be sentence case (not Title Case)
- Internal links should use full URL paths starting with `/blog/`

## Making this a proper Claude skill

To convert this into a reusable skill that Claude can invoke directly across projects:

1. Go to **Settings → Capabilities** in your Claude app
2. Create a new skill named `budgerigar-genetic-article`
3. Copy the contents of `README.md` into the skill's `SKILL.md`
4. Add the `generate.py` script as a reference file
5. Document trigger phrases: "write a new mutation guide", "generate a budgerigar article", etc.

Once registered as a skill, you can invoke it with `/budgerigar-genetic-article` and Claude will follow these patterns automatically.
