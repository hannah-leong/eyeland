export interface Fact {
  /** Emoji that matches the fact, shown big on the card */
  emoji: string;
  tag: string;
  text: string;
}

/**
 * The fact pool. The site shows one per day, picked deterministically from
 * today's date, so everyone sees the same fact on the same day — and it
 * rotates through the whole pool over time.
 *
 * Clinical / systems claims were verified against WHO fact sheets, Wikipedia,
 * and news sources before inclusion (see README notes / commit message).
 */
export const facts: Fact[] = [
  // ---------- Anatomy ----------
  {
    emoji: "📏",
    tag: "Anatomy",
    text: "Your eyeball measures about 16 mm across at birth and grows to roughly 24 mm by adulthood — half again as long, with most of that growth packed into childhood.",
  },
  {
    emoji: "🫁",
    tag: "Anatomy",
    text: "The cornea has no blood vessels at all. It absorbs oxygen directly from the air instead of from blood — a tiny piece of you lives on atmosphere.",
  },
  {
    emoji: "🕳️",
    tag: "Anatomy",
    text: "The pupil isn't a black dot — it's a hole. What you're looking at is the light-swallowing darkness inside your own eye.",
  },
  {
    emoji: "🧠",
    tag: "Anatomy",
    text: "Your retina and optic nerve are, embryologically, brain tissue — the eye literally grows out of the brain during development.",
  },
  {
    emoji: "🔬",
    tag: "Anatomy",
    text: "The retina packs in about 120 million rods for dim-light vision alongside 6 million cones for color and fine detail.",
  },
  {
    emoji: "🔭",
    tag: "Anatomy",
    text: "The cornea supplies about two-thirds of your eye's focusing power; the lens covers the rest and fine-tunes the focus.",
  },
  {
    emoji: "🌱",
    tag: "Anatomy",
    text: "The eye's lens keeps growing for your entire life. That slow-and-steady growth is part of why reading arms get longer around age 40.",
  },
  {
    emoji: "👻",
    tag: "Anatomy",
    text: "Every eye has a natural blind spot where the optic nerve exits — zero light sensors there — and your brain quietly paints over it.",
  },
  {
    emoji: "🍇",
    tag: "Anatomy",
    text: "Only about one-sixth of your eyeball is visible at any time. The rest hides safely inside the bony socket — an adult eyeball is roughly the size of a small grape.",
  },
  {
    emoji: "🩻",
    tag: "Anatomy",
    text: "The retina has no pain sensors whatsoever. That's why a sunburned retina or a detaching retina is completely painless — the sharp pain you feel in \"an eye ache\" comes from the cornea and surface, which are loaded with nerves.",
  },
  {
    emoji: "🧴",
    tag: "Anatomy",
    text: "Your tear film has three layers: mucus to spread it, water to nourish it, and a thin oil layer on top from glands in your eyelids. Block those oil glands and the tears evaporate too fast — the most common kind of dry eye.",
  },
  {
    emoji: "🚿",
    tag: "Anatomy",
    text: "Every tear drains through two pinholes in the inner corners of your eyes into the nasal cavity — which is exactly why your nose runs when you cry. Tears and snot are the same fluid.",
  },
  {
    emoji: "🫧",
    tag: "Anatomy",
    text: "Floaters are clumps of collagen floating in the eye's vitreous jelly, casting shadows on the retina. You never actually see the clump — only its shadow.",
  },
  {
    emoji: "💧",
    tag: "Anatomy",
    text: "The lens and cornea have no blood vessels at all. Both are fed by a clear fluid (aqueous humor) that is constantly made and drained — a sink that never gets turned off. When the drain clogs, pressure rises: glaucoma.",
  },
  {
    emoji: "📡",
    tag: "Anatomy",
    text: "The retina is the only place in the human body where doctors can watch live nerve tissue and blood vessels directly, without cutting anything — which is why eye exams can reveal diabetes, high blood pressure, and more.",
  },
  {
    emoji: "📏",
    tag: "Anatomy",
    text: "Pupils sit around 2 mm across in bright light and open to about 8 mm in the dark — a more than tenfold difference in how much light gets in.",
  },
  {
    emoji: "📉",
    tag: "Anatomy",
    text: "Because the optic nerve is really brain wiring, damage to it — as in glaucoma — can never regrow. Protecting sight means preventing loss; nothing in medicine can currently rebuild those connections.",
  },
  {
    emoji: "🪢",
    tag: "Anatomy",
    text: "Being very nearsighted isn't just a glasses prescription: a myopic eyeball is physically elongated, stretching the retina thin and measurably raising the risk of retinal detachment later in life.",
  },

  // ---------- Vision ----------
  {
    emoji: "🎨",
    tag: "Vision",
    text: "Humans can distinguish roughly 10 million different colors — all decoded from just three types of cone cells.",
  },
  {
    emoji: "💠",
    tag: "Vision",
    text: "There is no blue pigment in blue eyes. They're blue the way the sky is blue — light scattering off a nearly colorless layer.",
  },
  {
    emoji: "📌",
    tag: "Vision",
    text: "Sharp detail comes from a patch of retina about the size of your thumbnail at arm's length. Everything you're not looking straight at is smeared.",
  },
  {
    emoji: "🙃",
    tag: "Vision",
    text: "Your eyes project the world upside down onto the retina. Your brain quietly flips the image — and has been doing it since before you were born.",
  },
  {
    emoji: "📷",
    tag: "Vision",
    text: "Unlike a camera, your eye focuses by squeezing its lens into new shapes rather than moving it back and forth — a trick called accommodation.",
  },
  {
    emoji: "🌑",
    tag: "Vision",
    text: "Full night vision takes about 20–30 minutes to switch on, while your rods rebuild the light-sensitive pigment rhodopsin.",
  },
  {
    emoji: "✨",
    tag: "Vision",
    text: "In pitch darkness, a single human rod cell can signal the detection of a single photon. You are literally sensitive to one particle of light.",
  },
  {
    emoji: "📡",
    tag: "Vision",
    text: "The optic nerve carries about one million fibers from each eye — a million-channel data cable running straight to the brain.",
  },
  {
    emoji: "📏",
    tag: "Vision",
    text: "The 20/20 scale comes from Dutch ophthalmologist Hermann Snellen's eye chart in the 1860s: 20/20 means you see at 20 feet what an average eye sees at 20 feet.",
  },
  {
    emoji: "🤹",
    tag: "Vision",
    text: "Color constancy: your brain keeps a red apple looking red at sunrise, noon, and by candlelight, even though the wavelengths hitting your retina are wildly different. You see your brain's best guess, not raw light.",
  },
  {
    emoji: "👻",
    tag: "Vision",
    text: "Stare steadily at one fixed point and the shapes in your peripheral vision start dissolving — Troxler's fading, first described in 1804. Your brain drops unchanging, \"uninteresting\" input.",
  },
  {
    emoji: "👗",
    tag: "Vision",
    text: "In 2015, one photo of a dress split the internet blue/black versus white/gold — a genuine disagreement about an object's color, decided by each brain's guess about the lighting.",
  },
  {
    emoji: "🎯",
    tag: "Vision",
    text: "When you read, your eyes don't glide — they leap (saccades) several times a second, and your brain mutes vision mid-leap (saccadic suppression) so the world never smears.",
  },
  {
    emoji: "🧮",
    tag: "Vision",
    text: "Your pupils widen when you're thinking hard — pupillometry has measured mental effort by watching pupils since the 1960s, without asking subjects a single question.",
  },
  {
    emoji: "✨",
    tag: "Vision",
    text: "Stare at a bright light, then look away: the glowing negative \"afterimage\" is your overworked cones fatiguing. It's a deficit in your retina, not new light in the world.",
  },
  {
    emoji: "🦅",
    tag: "Vision",
    text: "A healthy human eye resolves about 20/20; an eagle's acuity is estimated around 20/4 — four to five times finer detail than the best human vision.",
  },
  {
    emoji: "🤏",
    tag: "Vision",
    text: "Even when you \"stare,\" your eyes make tiny corrective jumps (microsaccades) constantly. Pin an image perfectly still on the same retinal cells and it fades from view entirely.",
  },

  // ---------- Fun Stuff ----------
  {
    emoji: "😴",
    tag: "Fun Stuff",
    text: "You blink about 15–20 times a minute, and each blink takes roughly a tenth of a second — your eyes' built-in windshield washers.",
  },
  {
    emoji: "📱",
    tag: "Fun Stuff",
    text: "Staring at a screen roughly halves your blink rate. Less blinking means drier, tireder eyes — the classic case of digital eye strain.",
  },
  {
    emoji: "🏋️",
    tag: "Fun Stuff",
    text: "Each eye has six tiny muscles, and together they're the busiest movers in your body — around 100,000 coordinated movements a day.",
  },
  {
    emoji: "🧅",
    tag: "Fun Stuff",
    text: "Onions attack with a gas called syn-propanethial-S-oxide. Your eyes flood with tears to flush out the chemical trespasser.",
  },
  {
    emoji: "🦠",
    tag: "Fun Stuff",
    text: "Tears contain lysozyme, an enzyme that can dissolve bacterial cell walls — your eyes run their own antibacterial wash.",
  },
  {
    emoji: "🖌️",
    tag: "Fun Stuff",
    text: "Eyelashes last about 3–5 months before falling out, and each one doubles as a tripwire that triggers your blink reflex.",
  },
  {
    emoji: "🪪",
    tag: "Fun Stuff",
    text: "The iris has no repeating pattern anywhere in nature — even identical twins have different iris prints, which is why iris scanners work.",
  },
  {
    emoji: "😴",
    tag: "Fun Stuff",
    text: "The crust in the corners of your eyes each morning is simply dried tears and mucus — while you sleep you don't blink, so nothing sweeps them away.",
  },
  {
    emoji: "🥬",
    tag: "Fun Stuff",
    text: "The golden-yellow tint at the center of your retina is literally built from the lutein and zeaxanthin in the leafy greens you eat — your macula stores them like internal sunscreen.",
  },
  {
    emoji: "🪱",
    tag: "Fun Stuff",
    text: "Tiny Demodex mites are common, usually harmless roommates in your eyelash follicles — and they get more common with age.",
  },
  {
    emoji: "📸",
    tag: "Fun Stuff",
    text: "Red-eye in photos is the camera flash bouncing off your blood-rich retina. Cats' eyes glow instead, thanks to a mirror-like layer (tapetum) behind their retina that gives light a second pass.",
  },
  {
    emoji: "🐕",
    tag: "Fun Stuff",
    text: "Dogs see a blue-yellow world, not red-green — they're dichromats, much like a red-green colorblind person. Your red ball may look like a dull brownish blob lying in the grass.",
  },
  {
    emoji: "🦐",
    tag: "Fun Stuff",
    text: "Mantis shrimp carry 12–16 kinds of color receptor (you have 3) — and they're the only animals known to detect circularly polarized light. Their eyes are built for speed and polarization, not fine color matching.",
  },
  {
    emoji: "🦉",
    tag: "Fun Stuff",
    text: "Owls can't move their eyeballs at all — the tube-shaped eyes are fixed in place, so they swivel their heads up to about 270°, backed by 14 neck vertebrae to your 7.",
  },
  {
    emoji: "🐐",
    tag: "Fun Stuff",
    text: "Goats and sheep have horizontal, rectangular pupils and a field of view of over 300° — they can nearly see behind themselves without turning their heads.",
  },
  {
    emoji: "💘",
    tag: "Fun Stuff",
    text: "Your pupils widen when you see someone you're attracted to — pupillometry studies since the 1960s have measured interest and attraction this way, without subjects saying a word.",
  },
  {
    emoji: "🐱",
    tag: "Fun Stuff",
    text: "Cats have vertical slit pupils that close tighter than any round pupil can — protecting their night-tuned eyes in daylight while still letting them hunt at a whisper of light.",
  },

  // ---------- Health ----------
  {
    emoji: "🚨",
    tag: "Health",
    text: "A sudden shower of new floaters, flashes of light, or a dark curtain sliding into your vision can mean the retina is tearing or detaching — a same-day emergency. Painless does not mean harmless.",
  },
  {
    emoji: "🚰",
    tag: "Health",
    text: "Never rinse contact lenses with tap water: Acanthamoeba, a bug living in lakes, rivers, and taps, can hitch a ride on a lens and invade the cornea — sometimes badly enough to need a transplant. Saline only.",
  },
  {
    emoji: "📱",
    tag: "Health",
    text: "Optometrists' 20-20-20 rule for screen strain: every 20 minutes, look at something 20 feet away for 20 seconds — it gives your focusing muscles a break.",
  },
  {
    emoji: "🌙",
    tag: "Health",
    text: "Trouble seeing at night is often the very first sign of vitamin A deficiency — rod cells literally can't rebuild their light-catching pigment without it. Worldwide, it's a leading cause of preventable childhood blindness.",
  },
  {
    emoji: "🕶️",
    tag: "Health",
    text: "Decades of unprotected UV exposure raise your risk of cataracts and pterygium, a fleshy growth that creeps onto the cornea. Sunglasses aren't just comfort — they're long-term protection, and it starts in childhood.",
  },
  {
    emoji: "🫳",
    tag: "Health",
    text: "Chronic eye rubbing is a documented risk factor for keratoconus — the cornea thins and bulges outward. Rubbing feels great and is one of the few things eye doctors beg you to stop doing.",
  },
  {
    emoji: "💥",
    tag: "Health",
    text: "A pupil that suddenly blows wide open, or stops reacting after a head injury, is a textbook emergency — the pupil's nerves are your brain's early-warning system.",
  },

  // ---------- History ----------
  {
    emoji: "🔭",
    tag: "History",
    text: "In 1851, Hermann von Helmholtz built the ophthalmoscope and, for the first time ever, let a doctor look inside a living eye — turning the back of the eye from theory into something you could actually examine.",
  },
  {
    emoji: "✈️",
    tag: "History",
    text: "World War II gave medicine artificial lenses: RAF pilots who took acrylic windscreen fragments into their eyes showed almost no rejection — plastic, doctors realized, was eye-safe. In 1949, Harold Ridley implanted the first artificial lens at St Thomas' Hospital in London.",
  },
  {
    emoji: "🏆",
    tag: "History",
    text: "Swedish ophthalmologist Allvar Gullstrand won the 1911 Nobel Prize for working out how light focuses inside the eye — and his slit-lamp concept from the same year is the ancestor of the blade of light in every eye exam today.",
  },
  {
    emoji: "🐱",
    tag: "History",
    text: "The 1981 Nobel Prize went to Hubel and Wiesel for showing how vision wires up the brain: raise a kitten in darkness, or with one eye patched during its first months, and its visual cortex never develops normally — proof of a \"critical period.\"",
  },
  {
    emoji: "🪞",
    tag: "History",
    text: "In 1905, Eduard Zirm performed one of the first successful corneal transplants — living tissue from one human eye to another — turning an inevitable blindness into something fixable.",
  },
  {
    emoji: "🌊",
    tag: "History",
    text: "In the 1930s, Swiss surgeon Jules Gonin proved that sealing the tiny tear in a detached retina could make it reattach — a condition previously headed for permanent blindness became an operation.",
  },
  {
    emoji: "👓",
    tag: "History",
    text: "Reading spectacles appeared in northern Italy in the late 1200s — among the first assistive devices ever mass-produced — and by 1352 a painting by Tommaso da Modena showed a cardinal reading through a pair.",
  },
  {
    emoji: "🥽",
    tag: "History",
    text: "Soft contact lenses began with Czech chemist Otto Wichterle in 1961 and his water-swollen polymer. Before that, contact lenses were hard glass or plastic shells, first fitted on humans back in 1888.",
  },
  {
    emoji: "✂️",
    tag: "History",
    text: "In the early 1970s, Robert Machemer performed the first modern vitrectomy — removing the eye's jelly through a tiny port — and made diseases inside the eyeball operable for the first time.",
  },
  {
    emoji: "☠️",
    tag: "History",
    text: "Atropine — today a standard pupil-dilating eye drop — takes its name from Atropa belladonna, \"beautiful woman,\" whose juice Renaissance women reportedly used to widen their pupils (hard evidence is thin). Atropos, the Fate who cuts the thread of life, gave the plant its genus.",
  },

  // ---------- Trials ----------
  {
    emoji: "💸",
    tag: "Trials",
    text: "In 2008, US Medicare paid $537 million for 337,000 injections of Lucentis — and just $20 million for 480,000 injections of Avastin, used off-label for the very same eye disease.",
  },
  {
    emoji: "🧩",
    tag: "Trials",
    text: "Those two eye drugs come from the same parent antibody: Lucentis is the tiny engineered fragment (Fab) of the same molecule as the full-size cancer drug Avastin — at about $2,000 a dose versus $50.",
  },
  {
    emoji: "📋",
    tag: "Trials",
    text: "You can look up almost any clinical trial yourself: ClinicalTrials.gov has been public since February 29, 2000, now holds 444,000+ studies from 221 countries, and since 2007 US law forces most trials to register and post results.",
  },
  {
    emoji: "🏷️",
    tag: "Trials",
    text: "Drug trials pick themed names on purpose: Merck's cancer studies are all KEYNOTE-###, Bristol Myers Squibb's are CheckMate-###, brolucizumab's were HAWK and HARRIER (birds of prey), and faricimab's were TENAYA, LUCERNE, YOSEMITE and RHINE.",
  },
  {
    emoji: "🥗",
    tag: "Trials",
    text: "The famous AREDS2 eye-vitamin study from the US National Eye Institute swapped beta-carotene (a lung-cancer risk in smokers) for lutein and zeaxanthin — and found the omega-3 fatty acids everyone hoped for added nothing.",
  },
  {
    emoji: "💧",
    tag: "Trials",
    text: "Singapore's ATOM studies showed that atropine eye drops — originally derived from a plant poison — slow children's nearsightedness. The dilute 0.01% dose became the standard myopia-control drop, with fewer side effects and less rebound.",
  },

  // ---------- Tech ----------
  {
    emoji: "💻",
    tag: "Tech",
    text: "Optical coherence tomography, invented at MIT in 1991, is ultrasound made of light — it scans the retina in micron-thin slices so doctors can watch individual living retinal layers without touching the eye.",
  },
  {
    emoji: "🤖",
    tag: "Tech",
    text: "In 2018 the US FDA cleared IDx-DR — the first diagnostic system allowed to screen for diabetic eye disease using AI with no doctor in the loop. The algorithm reads the retinal photos and calls the referral itself.",
  },
  {
    emoji: "🔭",
    tag: "Tech",
    text: "Adaptive optics — the trick ground telescopes use to cancel atmospheric blur — was flipped onto the eye, and now photographs individual photoreceptors in living human retinas.",
  },

  // ---------- World ----------
  {
    emoji: "🌍",
    tag: "World",
    text: "WHO: at least 2.2 billion people live with vision impairment, and roughly 1 billion of those cases could have been prevented or aren't being addressed — including some 800 million who need glasses they can't get.",
  },
  {
    emoji: "👓",
    tag: "World",
    text: "In low-income countries, 2 out of 3 people who need glasses can't get them, and half of the people who need cataract surgery can't access it — while poor vision costs the world about $411 billion a year in productivity.",
  },
  {
    emoji: "🦠",
    tag: "World",
    text: "Trachoma — a bacterial eye infection spread by flies and dirty hands — is the world's leading infectious cause of blindness. WHO's SAFE strategy has validated elimination in 33 countries as of 2026, with a global 2030 target.",
  },
  {
    emoji: "🎁",
    tag: "World",
    text: "In 1988, Merck agreed to donate every dose of Mectizan (ivermectin) needed to wipe out river blindness — free, for as long as it takes. Hundreds of millions of treatments later, the program is estimated to have prevented 7 million years of disability (at a cost of $257 million, 1995–2010).",
  },
  {
    emoji: "🦁",
    tag: "World",
    text: "On June 30, 1925, Helen Keller challenged the Lions Clubs to become \"knights of the blind\" — the moment a global service club adopted blindness as its core mission. Today: the SightFirst program and World Sight Day, launched in 1998.",
  },
  {
    emoji: "✈️",
    tag: "World",
    text: "Orbis International's Flying Eye Hospital is a converted jet airliner with operating theatres and classrooms inside — from a DC-8 in 1982 to today's FedEx-donated MD-10. It has trained 325,000 eye-care workers and treated 23+ million people in 92 countries.",
  },
  {
    emoji: "🇮🇳",
    tag: "World",
    text: "Aravind Eye Care began in 1976 as an 11-bed hospital in Madurai, India — founder Dr. Govindappa Venkataswamy explicitly modeled its assembly-line efficiency on McDonald's. By 2012 it had treated 32 million patients and done 4 million surgeries, free or heavily subsidized for the poor.",
  },
  {
    emoji: "🇸🇬",
    tag: "World",
    text: "Singapore launched a National Electronic Record Programme in 2011, now used by 280+ institutions — and has announced that military and public-hospital records will be centralised into one shared system by 2028, backed by a new data-sharing law.",
  },
  {
    emoji: "💻",
    tag: "World",
    text: "Epic Systems — the world's largest EHR vendor — has run since 1979 from a wooded campus in Verona, Wisconsin, founded by Judith Faulkner with $70,000. Its systems now hold more than 325 million patient records.",
  },
  {
    emoji: "📉",
    tag: "World",
    text: "Myopia in East Asia is near-universal: one study of 19-year-old South Korean men found about 96.5% were nearsighted — pushing governments to mandate daily outdoor time (Taiwan) and even national anti-myopia plans (China, 2018).",
  },

  // ---------- Myths ----------
  {
    emoji: "🥕",
    tag: "Myths",
    text: "The \"carrots give you night vision\" idea was wartime propaganda: British officials promoted carrots to explain away the RAF's sudden knack for shooting down night bombers. The real secret was radar, not root vegetables.",
  },
  {
    emoji: "📺",
    tag: "Myths",
    text: "Reading in dim light or sitting too close to the TV won't damage your eyes — it can tire them, but the permanent-damage version is parental legend. The real screen problem is staring without blinking.",
  },
  {
    emoji: "🤧",
    tag: "Myths",
    text: "You can sneeze with your eyes open — and even if you couldn't, sneezing wouldn't launch your eyeballs. They're anchored by six muscles, fat, and lids, not sitting loose in the socket.",
  },
  {
    emoji: "☀️",
    tag: "Myths",
    text: "Sun-gazing hurts no one at the time — that's the trap. The retina has no pain nerves, so staring into the sun can burn a permanent blind spot into your fovea (solar retinopathy) with zero warning.",
  },
  {
    emoji: "🔵",
    tag: "Myths",
    text: "Blue-light-blocking glasses are mostly a marketing win: Cochrane systematic reviews have found little to no evidence they improve eye strain or sleep. The screen's bigger problem is how rarely you blink.",
  },
  {
    emoji: "🧘",
    tag: "Myths",
    text: "A century ago, William Bates sold the idea that relaxing the eye muscles could fix your sight without glasses (\"the Bates method\"). No study has ever shown exercises can cure nearsightedness — you relax your eyes, you don't reshape them.",
  },

  // ---------- Trials (continued) ----------
  {
    emoji: "🎲",
    tag: "Trials",
    text: "The modern clinical trial was born in 1948: the UK Medical Research Council's streptomycin trial for tuberculosis, designed with statistician Austin Bradford Hill, was the first to randomly assign patients to treatment or control — the foundation of evidence-based medicine.",
  },
  {
    emoji: "🚦",
    tag: "Trials",
    text: "How a drug is tested: Phase I checks safety and dosing in a small group, Phase II asks whether it seems to work in patients, and Phase III proves it against the best current treatment in hundreds or thousands of people. Most drugs fail somewhere along that road.",
  },

  // ---------- Vision / Health / History / World (continued) ----------
  {
    emoji: "🔦",
    tag: "Vision",
    text: "Shining a light in one eye makes BOTH pupils shrink — the consensual light reflex — which is why a doctor swings a flashlight between eyes: an eye whose pupil rebounds instead of constricting flags optic-nerve trouble (a \"Marcus Gunn pupil\").",
  },
  {
    emoji: "⏱️",
    tag: "Health",
    text: "Modern cataract surgery usually takes just 15–20 minutes under eye drops alone, sends you home the same day, and is one of the most commonly performed operations on Earth — most people notice clearer sight within days.",
  },
  {
    emoji: "💉",
    tag: "History",
    text: "Before 1884 there was no local anesthetic: eye surgery had to be endured awake or under ether. That year, Carl Koller — working amid Freud-era cocaine research — proved cocaine drops numbed the cornea, giving surgery its first local anesthetic.",
  },
  {
    emoji: "🌏",
    tag: "World",
    text: "Australian (New Zealand-born) ophthalmologist Fred Hollows (1929–1993) insisted good eye care shouldn't be a luxury: he led a landmark survey of Aboriginal eye health, built services in Nepal, and his foundation still restores sight with affordable cataract surgery across low-income countries.",
  },
];

export function tagColor(tag: string): string {
  // Pastel tints of the Softwire brand palette (pearl-aqua, coral, banana, mint)
  switch (tag) {
    case "Anatomy":
      return "#a5dfe2"; // light pearl-aqua
    case "Vision":
      return "#fbd25f"; // banana-split
    case "Fun Stuff":
      return "#f59c99"; // coral-beach-80
    case "World":
      return "#e4e5d9"; // mint-cream
    case "Health":
      return "#f9b6b3"; // coral mid
    case "Trials":
      return "#fbe4a8"; // light banana
    case "History":
      return "#c8e4e6"; // aqua-grey light
    case "Myths":
      return "#fdd5d3"; // light coral
    case "Tech":
      return "#80ced0"; // pearl-aqua
    default:
      return "#e7e7e7"; // light-grey
  }
}
