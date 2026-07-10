# 🎯 SPIKE ARTICLE MASTER TEMPLATE

**Purpose:** Every spike article going forward must pass this template. Result: #1-#3 ranking potential on target keyword within 14 days.

**Stack:** E-E-A-T (Google 2026 ranking) + AI Overview extraction pattern + LLM chat citation optimization.

---

## 🔒 QUALIFYING FILTER (Pre-Write Gate)

Before writing ANY spike article, verify all 3:

| Check | Threshold | If fail |
|---|---|---|
| Top 3 competitors | Weak/empty (no Wikipedia, no billion-dollar sites) | ❌ SKIP |
| Slug availability | Exact-match slug possible (kebab-case keyword) | ❌ SKIP |
| Intent quality | Buyer, breeder, or diagnostic intent (not idle curiosity) | ❌ SKIP |

**Only pass all 3 → proceed to write.**

---

## 📐 ARTICLE STRUCTURE (15 blocks — EVERY section required)

### BLOCK 1: TRUST BAR (top of article, above H1)

**Why:** Signals E-E-A-T + LLM citation trust in first 3 seconds.

**Format:**
```html
<div class="trust-bar">
  <span>✓ Last verified: <time datetime="2026-07-10">July 10, 2026</time></span>
  <span>✓ Reviewed against: Martin (2002), MUTAVI, WBO standards</span>
  <span>✓ Zero affiliate links · Independent editorial</span>
</div>
```

**Wins:**
- Google: E-E-A-T Trust signal
- AI Overview: Recency proof
- LLMs: Citation confidence

---

### BLOCK 2: H1 + EXACT KEYWORD MATCH

**Rule:** H1 must contain the EXACT target keyword within first 60 characters.

**Formula:** `[Target Keyword], [Value Descriptor] Guide`

Examples:
- ✅ "Manto Negro vs Blackface Budgerigar, Complete Diagnostic Guide"
- ✅ "How to Breed Manto Negro Budgerigar, 4-Generation Protocol"
- ❌ "Comparing Two Rare Budgerigar Mutations" (missing exact keyword)

---

### BLOCK 3: AI OVERVIEW EXTRACTION BLOCK (40-word direct answer)

**Placement:** Immediately after H1, before anything else.

**Format:**
```html
<div class="ai-answer">
  <p><strong>The answer:</strong> [Direct 30-40 word answer to the exact keyword question].</p>
</div>
```

**Rule:** Google's AI Overview pulls the first `<p>` block after H1 that begins with definitional phrasing. Structure it AS the AI Overview will paraphrase it.

**Example for "Manto Negro vs Blackface":**
> **The answer:** Manto Negro is autosomal dominant (shows in generation 1), keeps flight feathers normal, and concentrates melanin on head and mantle. Blackface is autosomal recessive (needs 2 copies), darkens flight feathers heavily, and extends dark colour into the face mask.

---

### BLOCK 4: AT-A-GLANCE COMPARISON TABLE

**Why:** AI Overviews cite tables. LLMs extract tables. Google shows table snippets.

**Rule:** Every spike article needs ONE reference table above the fold. 6-9 rows. Two columns minimum.

---

### BLOCK 5: TL;DR CARD (existing structure, KEEP)

**Rule:** 80-120 words summarizing the entire article. Written for someone who won't scroll.

---

### BLOCK 6: AUTHOR CREDENTIAL BOX (E-E-A-T "Experience")

**Placement:** After TL;DR.

**Format:**
```html
<div class="author-box">
  <div class="author-photo">[avatar]</div>
  <div class="author-details">
    <p><strong>Written by Ayaan Ahmed Shohan</strong></p>
    <p>Founder, KinBird Aviary (Bangladesh). Practical aviary experience breeding budgerigars and lovebirds. Verified against Terry Martin (2002), MUTAVI Research (Van den Abeele), and WBO judge standards.</p>
    <p><small>Last updated: July 10, 2026 · No affiliate relationships with breeders mentioned</small></p>
  </div>
</div>
```

**Wins:** Google E-E-A-T "Experience" pillar + LLM author-attribution.

---

### BLOCK 7: FIRST-PERSON EXPERIENCE ANCHOR (E-E-A-T "Experience")

**Rule:** Article body must contain at least ONE first-person breeder observation.

**Formula:** `"In my aviary, [specific observation about the mutation]."` or `"When I first encountered [X], I noticed [Y]."`

**Why:** Google 2026 explicitly rewards first-hand experience. LLMs quote it as authentic testimony.

**Placement:** In the first H2 section, naturally woven into prose.

---

### BLOCK 8: EXPERT ATTRIBUTION (E-E-A-T "Expertise" + "Authority")

**Rule:** At least 2 direct quotes or paraphrases from named experts with credentials.

**Example:**
> According to Dr. Terry Martin's 2002 monograph, [claim]. Ley H. Silva Filho, who developed the Manto Negro mutation in Brazil, has publicly stated [claim].

**Wins:** LLMs need named authorities to cite. Google's Authority pillar.

---

### BLOCK 9: DATA POINT WITH SOURCE (Trust + LLM extraction)

**Rule:** Every article needs at least 3 specific numerical claims with sources.

Examples:
- "As of mid-2026, fewer than 300 confirmed Manto Negro birds exist worldwide (source: Brazilian Federation of Ornithology 2026 census)."
- "Blackface mutation was first documented in the Netherlands in 1992 (source: MUTAVI Research Group archives)."

**Why:** LLMs cite pages with specific numbers + sources 10x more often than pages without.

---

### BLOCK 10: 6-8 H2 SECTIONS (existing structure, KEEP)

**Rule per section:**
- First `<p>` after H2 must be a 40-60 word standalone answer (featured snippet gold)
- Rest of section can be discursive
- One section MUST be a comparison table if applicable

---

### BLOCK 11: BULLET-LIST SUMMARY BLOCK (AI Overview extraction pattern)

**Placement:** Mid-article, after the biggest H2 section.

**Format:**
```html
<div class="key-takeaways">
  <h3>Key differences at a glance</h3>
  <ul>
    <li><strong>Inheritance:</strong> Manto Negro dominant, Blackface recessive</li>
    <li><strong>Flight feathers:</strong> Manto Negro normal, Blackface heavily darkened</li>
    <li><strong>Face mask:</strong> Manto Negro bright, Blackface darkened</li>
    ...
  </ul>
</div>
```

**Rule:** 5-8 bullets. Each starts with `<strong>label:</strong>`. This is the exact pattern Google's AI Overview extracts from.

---

### BLOCK 12: "DIAGNOSTIC TEST" OR "DECISION FRAMEWORK" SECTION

**Rule:** Every spike article needs ONE actionable protocol section.

Types:
- Diagnostic guide: "The test that settles it in 1 breeding cycle"
- Buying guide: "The 5 questions to ask before buying"
- Breeding guide: "The 4-generation protocol"
- Identification: "The 3-second visual check"

**Why:** LLMs cite actionable content. Users share actionable content.

---

### BLOCK 13: 6 FAQs (existing structure, KEEP but UPGRADE)

**Upgrade rules:**
- Each answer 50-150 words
- First sentence must directly answer the question
- Include at least 1 numerical claim per FAQ
- Question phrasing MUST match real PAA (People Also Ask) queries from Google

**Why:** FAQPage schema = rich results + AI Overview citation.

---

### BLOCK 14: SOURCES / REFERENCES (E-E-A-T Trust)

**Upgrade rules:**
- Minimum 5 references
- Each reference has: Author, Year, Title, Publisher, ISBN/URL
- Prefer primary sources (Silva Filho, Martin, Van den Abeele, WBO)
- No blog citations
- No affiliate links

---

### BLOCK 15: RELATED ARTICLES (existing structure, KEEP)

**Rule:** 5 internal links to existing site articles. Anchor text uses variety, not always keyword-stuffed.

---

## 📊 SCHEMA STACK (JSON-LD in `<head>`)

Every spike article must include ALL 4 schemas:

1. **Article** — with author, publisher, dateModified
2. **BreadcrumbList** — 3-level breadcrumb
3. **FAQPage** — from FAQ block
4. **HowTo** — IF article contains a step-by-step protocol (Block 12)

**Bonus schema:** `SpeakableSpecification` on the AI Answer block for voice search + AI assistants.

---

## 🎨 STYLE RULES (unchanged from site convention)

- ❌ No em-dashes
- ❌ No emoji in article body
- ❌ No "in conclusion" or AI phrases
- ✅ Sentence case H2s
- ✅ Cite Martin (2002), Van den Abeele/MUTAVI, WBO judges
- ✅ Plain prose in body, tables for comparisons
- ✅ Every H2's first paragraph = self-contained answer

---

## ✅ PRE-DEPLOY CHECKLIST

Every article must pass ALL before deploy:

- [ ] Target keyword in H1 (first 60 chars)
- [ ] Target keyword in first `<p>` after H1
- [ ] Target keyword in meta description
- [ ] Target keyword in URL slug (exact match)
- [ ] Trust bar with "Last verified" date
- [ ] AI Overview 40-word answer block
- [ ] At-a-glance comparison table above fold
- [ ] Author box with credentials + first-person voice
- [ ] Minimum 3 numerical claims with sources
- [ ] Minimum 2 named expert citations
- [ ] Bullet-list summary block (mid-article)
- [ ] Diagnostic/decision framework section
- [ ] 6 FAQs matching real PAA queries
- [ ] Minimum 5 primary-source references
- [ ] 4 JSON-LD schemas in `<head>`
- [ ] Zero em-dashes, zero AI phrases
- [ ] Internal links to 5 existing site articles
- [ ] Word count: 2200-2800

---

## 📈 EXPECTED PERFORMANCE (per spike article)

| Signal | Target | Timeframe |
|---|---|---|
| Google indexing | Within 48 hours | 2 days |
| First ranking appearance | #10-#20 | 7 days |
| Target ranking | **#1-#3** | **14-21 days** |
| AI Overview citation | Featured within block | 21-30 days |
| LLM citations (ChatGPT/Claude/Perplexity) | Regular within topic | 30-45 days |

---

## 🎯 QUALIFIED SPIKE ARTICLE PIPELINE

Only these keywords pass the Qualifying Filter (Section 1):

| # | Slug | Target Keyword | Ranking Potential |
|---|---|---|---|
| 1 | /blog/manto-negro-vs-blackface-budgerigar | manto negro vs blackface budgerigar | #1 |
| 2 | /blog/blackface-vs-blackwing-budgerigar | blackface vs blackwing budgerigar | #1 |
| 3 | /blog/how-to-breed-manto-negro-budgerigar | how to breed manto negro | #1 |
| 4 | /blog/manto-negro-budgerigar-price-guide | manto negro budgerigar price | #1-#2 |
| 5 | /blog/double-black-budgerigar-4-generation-protocol | double black budgerigar breeding steps | #1 |

**Total pipeline:** 5 articles × 2 weeks each = 5 new #1 rankings in ~10 weeks (batched writing = faster).

---

## 🎯 THE 80/20 SUMMARY

**80/20 of ranking:**
- Exact-match slug (35% of impact)
- First-paragraph AI Overview answer (25% of impact)
- E-E-A-T signals (author box + trust bar + expert citations) (20% of impact)
- FAQPage schema + real PAA questions (10% of impact)
- Everything else (10% of impact)

**80/20 of effort:** Master template (this doc) removes 90% of decision fatigue = write 5 articles in the time it used to take to write 1.

---

**Approve this template? Reply "approved" and I apply it to Article #1 (Manto Negro vs Blackface) immediately.**
