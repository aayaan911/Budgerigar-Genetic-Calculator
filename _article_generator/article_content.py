"""Article content definitions for the budgerigar-genetic-article generator.

Define your new article(s) here. Each article is keyed by URL slug.
Run: python3 _article_generator/generate.py

For reference: see example_article.py for a fully-completed example article
showing all required fields.
"""

# Edit this dict to add a new article. Multiple articles can be defined
# at once — the generator will produce one HTML file per slug.
META = {
    # 'your-new-mutation-slug': {
    #     'title': 'Your Article Title',
    #     'short': 'Short Name',
    #     'desc': 'Meta description, 150-160 characters.',
    #     'keywords': 'comma, separated, target, keywords',
    #     'og_title': 'Open Graph title',
    #     'og_desc': 'Open Graph description',
    #     'date_pub': '2026-06-19',
    #     'date_mod': '2026-06-19',
    #     'wc': 2800,
    #     'tags': 'Tag1, Tag2, Tag3',
    #     'about_json': '[{"@type":"Thing","name":"Subject"}]',
    #     'date_label': 'Published',
    #     'date_value': 'June 19, 2026',
    #     'read_time': '10 min',
    #     'origin': 'Country, Year',
    #     'h1': 'Article H1 title',
    #     'lead': 'Lead paragraph shown after H1.',
    #     'tldr': 'TL;DR card content. 80-120 words.',
    # },
}

SECTIONS = {
    # 'your-new-mutation-slug': [
    #     ('What this mutation looks like', "Paragraph 1.\n\nParagraph 2."),
    #     ('History and origin', "Paragraph."),
    #     ('How inheritance works', "Paragraph."),
    #     ('Pairing predictions', "Paragraph."),
    #     ('Combinations with other mutations', "Paragraph."),
    #     ('Mutation in the calculator', "Paragraph linking to /."),
    # ],
}

FAQS = {
    # 'your-new-mutation-slug': [
    #     ('What is this mutation?', 'Answer.'),
    #     ('How is it inherited?', 'Answer.'),
    #     ('Can a hen be split for this?', 'Answer.'),
    #     ('How do I distinguish it from similar mutations?', 'Answer.'),
    #     ('What does the test pairing produce?', 'Answer.'),
    #     ('Where can I test pairings?', 'Test any pairing at the Budgerigar Genetics Calculator at https://budgerigargenetics.com/'),
    # ],
}

REFS = {
    # 'your-new-mutation-slug': [
    #     'Martin, T. (2002). <em>A Guide to Colour Mutations and Genetics in Parrots.</em> ABK Publications.',
    #     'Onsman, I. MUTAVI Research. <a href="https://www.mutavi.info/" target="_blank" rel="noopener noreferrer">mutavi.info</a>',
    #     'Rogers, C. H. <em>World of Budgerigars.</em> Beech Publishing House, UK.',
    #     'Wikipedia. <em>Budgerigar colour genetics.</em>',
    # ],
}

RELATED = {
    # 'your-new-mutation-slug': [
    #     ('Related Article 1', '/blog/related-slug-1'),
    #     ('Related Article 2', '/blog/related-slug-2'),
    #     ('Mutation Comparison Guide', '/blog/budgerigar-mutation-comparison-guide'),
    #     ('Dark Factor Inheritance', '/blog/dark-factor-budgerigar-mutation'),
    #     ('Auto-Sex Pairing Guide', '/blog/budgie-sex-linked-auto-sex-pairing-guide'),
    # ],
}
