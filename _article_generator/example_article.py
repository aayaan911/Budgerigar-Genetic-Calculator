"""Fully-completed example article for reference.

Shows all required fields with realistic content for a hypothetical
"Crested Budgerigar Mutation" article. Use this as a copy-paste template
when writing new articles in article_content.py.
"""

META = {
    'crested-budgerigar-mutation': {
        'title': 'Crested Budgerigar Mutation, Tufted Half-Circular Full-Circular Genetics Guide',
        'short': 'Crested Mutation',
        'desc': 'The Crested budgerigar mutation explained. Three crest types (Tufted, Half-Circular, Full-Circular), incomplete dominance, breeding difficulty, and pairing predictions for serious crest breeders.',
        'keywords': 'crested budgerigar, tufted crest budgie, half circular crest, full circular crest, crested budgie genetics, budgerigar crest mutation',
        'og_title': 'Crested Budgerigar Mutation, Complete Genetics Guide',
        'og_desc': 'Tufted, Half-Circular, and Full-Circular crest types. Incomplete dominance and pairing predictions.',
        'date_pub': '2026-06-19',
        'date_mod': '2026-06-19',
        'wc': 2800,
        'tags': 'Crested, Autosomal Incompletely Dominant, Budgerigar Mutations',
        'about_json': '[{"@type":"Thing","name":"Crested Budgerigar Mutation"},{"@type":"Thing","name":"Autosomal Incompletely Dominant Inheritance"}]',
        'date_label': 'Published',
        'date_value': 'June 19, 2026',
        'read_time': '10 min',
        'origin': 'Australia, 1920s',
        'h1': 'Crested Budgerigar Mutation, Complete Genetics Guide',
        'lead': 'One of the more visually distinctive budgerigar mutations. Crested produces three different crest types depending on inheritance dose and modifier genes: Tufted (small forward-pointing feather tuft), Half-Circular (partial crown), and Full-Circular (complete crown of recurved feathers). Autosomal incompletely dominant, originated in Australia in the 1920s.',
        'tldr': 'Crested is an autosomal incompletely dominant budgerigar mutation that produces three different crest expressions: Tufted (small forward tuft), Half-Circular (partial crown), and Full-Circular (complete crown). The specific crest type depends on the bird\'s genotype plus modifier genes that influence expression. Inheritance is complex compared to standard SF/DF mutations because the gene interacts with multiple modifiers. Crested birds require careful pairing to maintain crest quality across generations.',
    },
}

SECTIONS = {
    'crested-budgerigar-mutation': [
        ('What Crested looks like on a real bird',
         "A Crested budgerigar has feathers on the top of the head that grow forward or radiate outward instead of lying flat backward. The exact pattern depends on the crest type.\n\nTufted Crest is the simplest expression. A small clump of forward-pointing feathers sits at the front of the crown, looking like a fringe or short bangs. The rest of the head feathers grow normally backward.\n\nHalf-Circular Crest shows a partial crown of recurved feathers covering roughly half of the head crown. The crown is incomplete but visibly distinct from a Normal bird's flat head.\n\nFull-Circular Crest is the most complete expression. The entire crown of the head is covered in recurved feathers forming a full circle around the top of the head. This is the show-quality expression most exhibition breeders aim to produce."),

        ('History and origin',
         "Crested budgerigars first appeared in Australian aviaries in the 1920s. The mutation entered exhibition lines slowly because crest quality is difficult to fix genetically — breeders observed that the same pairing could produce a mix of Tufted, Half-Circular, and Full-Circular offspring even within a single clutch.\n\nStable Crested lines were established in the UK and Australia by the 1940s. Modern WBO exhibition standards recognize all three crest types as separate classes, judged on crest quality, symmetry, and feather density."),

        ('How Crested inheritance works',
         "Crested is autosomal incompletely dominant. The Crested gene sits on an autosome and inherits identically in cocks and hens. A bird can be Normal (no Crested allele), Single Factor (one copy), or Double Factor (two copies).\n\nThe complication is that crest expression depends on modifier genes that vary by line. A bird with the same Crested genotype can produce different crest types depending on which modifiers it inherited. SF Crested birds typically express Tufted or Half-Circular. DF Crested birds typically express Half-Circular or Full-Circular. But the boundaries are not strict — modifier genes shift the expression."),

        ('The three crest types and their genetics',
         "Tufted Crest is typically associated with SF Crested birds where modifier genes suppress the full circular pattern. The crest is small and may be hard to see in young chicks but becomes more visible at maturity.\n\nHalf-Circular Crest typically appears on SF Crested birds with strong modifier expression, or on DF Crested birds with weaker modifier expression. The crown is visibly raised but incomplete.\n\nFull-Circular Crest typically requires DF Crested status plus strong modifier genes that amplify the expression. The full crown is the rarest and most prized type, requiring careful breeding to produce consistently."),

        ('Pairing predictions',
         "Standard autosomal incompletely dominant ratios apply.\n\nSF Crested × Normal produces 50% SF Crested offspring and 50% Normal offspring. The SF Crested offspring may express Tufted, Half-Circular, or rarely Full-Circular depending on modifier inheritance.\n\nDF Crested × Normal produces 100% SF Crested offspring (each chick inherits one Crested allele from the DF parent).\n\nSF Crested × SF Crested produces the textbook 1:2:1 Mendelian ratio: 25% Normal, 50% SF Crested, 25% DF Crested. The DF Crested offspring are more likely to express Full-Circular.\n\nDF Crested × DF Crested produces 100% DF Crested offspring, with crest type variation based on modifier inheritance from both parents."),

        ('Combinations with other mutations',
         "Crested combines with all major budgerigar mutations.\n\nCrested Opaline combines the crown with the wing-reversal pattern. Popular in exhibition lines.\n\nCrested Cinnamon adds brown wing markings to the crested bird.\n\nCrested Spangle combines reverse wing markings with the crown.\n\nCrested Yellow Face on blue series adds yellow face to a crested bird.\n\nCrested Pied (any of the three pied mutations) produces double pattern variation, popular in pet stock."),

        ('Why crest quality is hard to fix',
         "Three reasons make Crested breeding difficult.\n\nFirst, modifier gene complexity. Multiple genes influence crest expression beyond the main Crested allele. Breeders cannot reliably predict crest type from genotype alone — modifiers determine final expression.\n\nSecond, partial penetrance. Some birds carrying the Crested allele express little or no visible crest, even at DF status. The trait does not always express fully.\n\nThird, modifier loss across generations. Outcrossing Crested birds to non-Crested lines often loses the modifier genes that produced good crests in the parents. Subsequent generations may show reduced crest quality even when the Crested gene is present.\n\nSerious Crested breeders maintain dedicated lines and avoid heavy outcrossing to preserve both the main gene and the modifier complex."),

        ('Crested in the calculator',
         "The Budgerigar Genetics Calculator handles Crested pairings with proper autosomal incompletely dominant logic. Select Crested as a mutation on either parent, set the factor (SF or DF), and the engine outputs offspring percentages.\n\nThe calculator tracks the Crested gene status (Normal, SF, DF) but does not predict specific crest types (Tufted, Half-Circular, Full-Circular), because crest type depends on modifier genes that vary by line and cannot be predicted from genotype alone.\n\nTest Crested × Crested pairings at <a href=\"/\">budgerigargenetics.com</a> to plan your crest breeding program."),
    ],
}

FAQS = {
    'crested-budgerigar-mutation': [
        ('What is the Crested budgerigar mutation?',
         "Crested is an autosomal incompletely dominant budgerigar mutation that produces feathers on the top of the head growing forward or radiating outward instead of lying flat. Three crest types exist: Tufted, Half-Circular, and Full-Circular. Origin: Australia 1920s."),

        ('How is Crested inherited in budgerigars?',
         "Crested follows autosomal incompletely dominant inheritance. A bird can be Normal, Single Factor (one Crested allele), or Double Factor (two copies). The specific crest type depends on the bird's genotype plus modifier genes that vary by line. SF birds typically express Tufted or Half-Circular; DF birds typically express Half-Circular or Full-Circular."),

        ('What is the difference between Tufted, Half-Circular, and Full-Circular crest?',
         "Tufted Crest is the smallest — a forward-pointing tuft of feathers at the front of the crown. Half-Circular Crest covers about half of the head crown with a partial crown of recurved feathers. Full-Circular Crest is the most complete — a full circle of recurved feathers covering the entire crown, the show-quality expression most exhibition breeders aim for."),

        ('Why is Crested difficult to breed consistently?',
         "Three reasons. First, modifier genes beyond the main Crested allele influence final crest expression — breeders cannot reliably predict crest type from genotype alone. Second, partial penetrance means some birds carrying the Crested gene express little or no visible crest. Third, outcrossing to non-Crested lines often loses the modifier complex that produced good crests, reducing crest quality in subsequent generations."),

        ('Can a hen be split for Crested?',
         "Hens cannot be split for Crested in the traditional sex-linked sense because Crested is autosomal, not sex-linked. However, the term split is sometimes used informally for an autosomal recessive Normal bird carrying one Crested allele invisibly. Since Crested is incompletely dominant, the SF (one allele) state is technically visible in most birds, though modifier genes can reduce expression so much that some SF birds appear nearly Normal."),

        ('What does the Crested × Crested pairing produce?',
         "SF Crested × SF Crested produces the textbook 1:2:1 ratio: 25% Normal, 50% SF Crested, 25% DF Crested. The DF Crested offspring are more likely to express Full-Circular crests. DF Crested × DF Crested produces 100% DF Crested offspring. The Budgerigar Genetics Calculator handles all Crested pairings with proper SF/DF tracking."),
    ],
}

REFS = {
    'crested-budgerigar-mutation': [
        'Martin, T. (2002). <em>A Guide to Colour Mutations and Genetics in Parrots.</em> ABK Publications, Tweed Heads NSW. ISBN 978-0-9577024-7-9. Standard reference for autosomal incompletely dominant Crested inheritance.',
        'Onsman, I. <em>Crest: A Subvital Character in the Budgerigar.</em> MUTAVI Research and Advice Group. <a href="https://www.euronet.nl/users/hnl/crested.htm" target="_blank" rel="noopener noreferrer">euronet.nl/users/hnl/crested.htm</a>. Genetics of the crest character in budgerigars.',
        'Rogers, C. H. <em>World of Budgerigars.</em> Beech Publishing House, UK. Documents the earliest stable Crested lines from the 1920s.',
        'Wikipedia. <em>Budgerigar colour genetics.</em> <a href="https://en.wikipedia.org/wiki/Budgerigar_colour_genetics" target="_blank" rel="noopener noreferrer">en.wikipedia.org/wiki/Budgerigar_colour_genetics</a>.',
    ],
}

RELATED = {
    'crested-budgerigar-mutation': [
        ('Spangle SF vs DF', '/blog/spangle-budgerigar-mutation'),
        ('Dominant Pied Genetics', '/blog/dominant-pied-budgerigar-mutation'),
        ('Dark Factor Inheritance', '/blog/dark-factor-budgerigar-mutation'),
        ('Mutation Comparison Guide', '/blog/budgerigar-mutation-comparison-guide'),
        ('Auto-Sex Pairing Guide', '/blog/budgie-sex-linked-auto-sex-pairing-guide'),
    ],
}
