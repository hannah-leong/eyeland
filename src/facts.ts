export interface Fact {
  /** Emoji that matches the fact, shown big on the card */
  emoji: string;
  tag: string;
  text: string;
}

/**
 * The fact pool. The site shows two per day — one in the morning, one from
 * noon — picked deterministically from the date, so everyone sees the same
 * fact in the same half-day, and it rotates through the whole pool over time
 * (see factIndexForSlot in lib/time.ts).
 *
 * Every fact was re-checked in November 2026. Figures that go out of date
 * (study counts, country tallies, WHO estimates) are worth re-verifying
 * against WHO fact sheets / the primary source now and then.
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
    text: "The retina packs in roughly 100 million rods for dim-light vision alongside about 5 million cones for color and fine detail — textbooks long quoted 120 million and 6 million, but careful modern counts come out a little lower.",
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
    text: "Only about one-sixth of your eyeball is visible at any time. The rest hides safely inside the bony socket — an adult eyeball is about 24 mm across, roughly the size of a large grape.",
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
    text: "Tears drain through tiny pinholes (puncta) in the inner corner of each eyelid and down into your nose — which is exactly why your nose runs when you cry. A good part of that \"snot\" is really overflow tears.",
  },
  {
    emoji: "🫧",
    tag: "Anatomy",
    text: "Floaters are clumps of collagen floating in the eye's vitreous jelly, casting shadows on the retina. You never actually see the clump — only its shadow.",
  },
  {
    emoji: "💧",
    tag: "Anatomy",
    text: "The lens and cornea have no blood vessels at all. Both are nourished largely by a clear fluid (aqueous humor) that is constantly made and drained — a sink that never gets turned off. When the drain clogs, pressure rises: glaucoma.",
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
    text: "Truly sharp detail comes only from the fovea, which covers a patch of your view about the size of your thumbnail held at arm's length. Everything you're not looking straight at is surprisingly blurry.",
  },
  {
    emoji: "🙃",
    tag: "Vision",
    text: "Your eye's optics project the world upside down and back to front onto the retina. Nothing ever flips it back — your brain simply learned that this is what \"right way up\" looks like.",
  },
  {
    emoji: "📷",
    tag: "Vision",
    text: "Unlike a camera, your eye focuses by changing the shape of its lens rather than moving it back and forth: a ring of muscle contracts, the fibers suspending the lens slacken, and the lens bulges rounder for close-up — a trick called accommodation.",
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
    text: "The 20/20 scale comes from Dutch ophthalmologist Herman Snellen's eye chart of 1862: 20/20 means you can read at 20 feet what a normal eye reads at 20 feet. 20/40 means you need to be at 20 feet to read what a normal eye manages from 40.",
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
    text: "Eagle eyes really are sharper: a wedge-tailed eagle's acuity has been measured at about 140 cycles per degree, against roughly 60 for the very best human eyes — a bit over twice the detail. The popular \"eight times sharper\" claim outruns the measurements.",
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
    text: "You blink about 15–20 times a minute, and each blink lasts roughly a tenth to a third of a second — your eyes' built-in windshield washers.",
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
    text: "An eyelash lasts a few months before it falls out and is replaced, and each one doubles as a tripwire that triggers your blink reflex.",
  },
  {
    emoji: "🪪",
    tag: "Fun Stuff",
    text: "No two irises are alike: the fine texture forms largely by chance during development, so even identical twins — and even your own left and right eyes — have different iris patterns. That's why iris scanners work.",
  },
  {
    emoji: "😴",
    tag: "Fun Stuff",
    text: "The crust in the corners of your eyes each morning is dried mucus, oil, shed skin cells, and tears — while you sleep you don't blink, so nothing sweeps it away.",
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
    text: "Mantis shrimp carry 12–16 kinds of photoreceptor (you have 3 for color) and are among the very few animals known to detect circularly polarized light. Yet in tests they tell similar colors apart worse than we do — their eyes seem built for fast recognition, not fine color matching.",
  },
  {
    emoji: "🦉",
    tag: "Fun Stuff",
    text: "Owls can barely move their eyeballs — the tube-shaped eyes are locked in place by bone, so they swivel their heads up to about 270° instead, backed by 14 neck vertebrae to your 7.",
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
    text: "Never rinse contact lenses with tap water: Acanthamoeba, a microbe living in lakes, rivers, and taps, can hitch a ride on a lens and invade the cornea — sometimes badly enough to need a transplant. Use fresh disinfecting lens solution only.",
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
    text: "World War II gave medicine artificial lenses: RAF pilots with splinters of acrylic cockpit canopy lodged in their eyes showed almost no reaction — plastic, doctors realized, was eye-safe. In 1949, Harold Ridley implanted the first artificial lens at St Thomas' Hospital in London.",
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
    text: "In the 1920s, Swiss surgeon Jules Gonin proved that sealing the tiny tear in a detached retina could make it reattach — a condition previously headed for permanent blindness became an operation.",
  },
  {
    emoji: "👓",
    tag: "History",
    text: "Reading spectacles appeared in Italy in the late 1200s — and by 1352 a fresco by Tommaso da Modena showed a cardinal reading through a pair, the earliest known picture of eyeglasses.",
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
    text: "The eye drugs Lucentis and Avastin come from the same parent antibody: Lucentis is a tiny engineered fragment (Fab) of it, Avastin the full-size cancer drug, used off-label in eyes — at about $2,000 a dose versus $50.",
  },
  {
    emoji: "📋",
    tag: "Trials",
    text: "You can look up almost any clinical trial yourself: ClinicalTrials.gov has been public since February 29, 2000, now lists close to 600,000 studies from more than 220 countries and territories, and since 2007 US law forces most trials to register and post results.",
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
    text: "Singapore's ATOM studies showed that atropine eye drops — originally derived from a plant poison — slow children's nearsightedness, and that a dilute 0.01% dose brings fewer side effects and less rebound. Low-dose atropine is now widely used for myopia control, though later trials suggest 0.05% works better.",
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
    text: "WHO estimates that in low-income countries 2 out of 3 people who need glasses can't get them, and that worldwide only about 17% of people whose sight is impaired by cataract have received proper treatment — while poor vision costs the world about $411 billion a year in lost productivity.",
  },
  {
    emoji: "🦠",
    tag: "World",
    text: "Trachoma — a bacterial eye infection spread by flies and dirty hands — is the world's leading infectious cause of blindness. WHO's SAFE strategy has validated elimination in 33 countries as of 2026, with a global 2030 target.",
  },
  {
    emoji: "🎁",
    tag: "World",
    text: "In 1987, Merck pledged to donate every dose of Mectizan (ivermectin) needed to wipe out river blindness — free, for as long as it takes. Billions of treatments later, one analysis found mass treatment in Africa averted 8.2 million years of healthy life lost between 1995 and 2010, for about $257 million.",
  },
  {
    emoji: "🦁",
    tag: "World",
    text: "On June 30, 1925, Helen Keller challenged the Lions Clubs to become \"knights of the blind\" — the moment a global service club adopted blindness as its core mission. The Lions went on to launch the SightFirst program in 1990 and World Sight Day in 1998.",
  },
  {
    emoji: "✈️",
    tag: "World",
    text: "Orbis International's Flying Eye Hospital is a converted jet airliner with an operating theatre and classroom inside — from a DC-8 in 1982 to today's FedEx-donated MD-10. Over four decades it has flown hands-on training to eye-care teams in more than 80 countries.",
  },
  {
    emoji: "🇮🇳",
    tag: "World",
    text: "Aravind Eye Care began in 1976 as an 11-bed hospital in Madurai, India — founder Dr. Govindappa Venkataswamy explicitly modeled its assembly-line efficiency on McDonald's. By 2012 it had treated 32 million patients and done 4 million surgeries, free or heavily subsidized for the poor.",
  },
  {
    emoji: "🇸🇬",
    tag: "World",
    text: "Singapore set up its National Electronic Health Record in 2011 so that any treating doctor can see a patient's key health information — and a Health Information Act passed in January 2026 will require healthcare providers, private clinics included, to contribute to it.",
  },
  {
    emoji: "💻",
    tag: "World",
    text: "Epic Systems — the largest electronic-health-record vendor in the US — was founded in 1979 by Judith Faulkner with about $70,000, and now runs from a sprawling campus in Verona, Wisconsin. Its software holds records for more than 325 million patients.",
  },
  {
    emoji: "📉",
    tag: "World",
    text: "Myopia in urban East Asia is near-universal among the young: one study of 19-year-old men in Seoul found about 96.5% were nearsighted — pushing governments to mandate daily outdoor time (Taiwan) and even national anti-myopia plans (China, 2018).",
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
    text: "Blue-light-blocking glasses are mostly a marketing win: a 2023 Cochrane systematic review found little to no evidence they reduce eye strain or improve sleep. The screen's bigger problem is how rarely you blink.",
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
    text: "How a drug is tested: Phase I checks safety and dosing in a small group, Phase II asks whether it seems to work in patients, and Phase III tests it against a placebo or the current standard treatment in hundreds or thousands of people. Most drugs fail somewhere along that road.",
  },

  // ---------- Vision / Health / History / World (continued) ----------
  {
    emoji: "🔦",
    tag: "Vision",
    text: "Shining a light in one eye makes BOTH pupils shrink — the consensual light reflex — which is why a doctor swings a flashlight between eyes: a pupil that widens instead of constricting when the light swings onto it flags optic-nerve trouble (a \"Marcus Gunn pupil\").",
  },
  {
    emoji: "⏱️",
    tag: "Health",
    text: "Modern cataract surgery usually takes about 15–20 minutes under local anesthetic — often just numbing drops — sends you home the same day, and is one of the most commonly performed operations on Earth. Most people notice clearer sight within days.",
  },
  {
    emoji: "💉",
    tag: "History",
    text: "Before 1884 there was no local anesthetic: eye surgery had to be endured awake or under ether or chloroform. That year, Carl Koller — a colleague of Freud's, who was studying cocaine at the time — showed cocaine drops numbed the cornea, giving surgery its first local anesthetic.",
  },
  {
    emoji: "🌏",
    tag: "World",
    text: "Australian (New Zealand-born) ophthalmologist Fred Hollows (1929–1993) insisted good eye care shouldn't be a luxury: he led a landmark survey of Aboriginal eye health, built services in Nepal, and his foundation still restores sight with affordable cataract surgery across low-income countries.",
  },

  // ---------- Science (and more Anatomy / Fun Stuff / Tech) ----------
  {
    emoji: "⚡",
    tag: "Science",
    text: "Vision starts with one of the fastest reactions in biology: when a photon hits the pigment rhodopsin, the retinal molecule inside snaps from a bent shape to a straight one in about 200 femtoseconds — 200 millionths of a billionth of a second.",
  },
  {
    emoji: "📣",
    tag: "Science",
    text: "A rod cell is a chemical amplifier. One light-activated rhodopsin switches on hundreds of signalling proteins, which destroy thousands of messenger molecules and slam shut hundreds of ion channels — that cascade is how a single photon becomes a measurable electrical signal.",
  },
  {
    emoji: "🔌",
    tag: "Science",
    text: "Photoreceptors work backwards. In total darkness they are switched ON, steadily leaking current and releasing their transmitter; light turns them OFF. Seeing is, electrically, your retina going quiet.",
  },
  {
    emoji: "🔄",
    tag: "Science",
    text: "The vertebrate retina is installed back to front: light has to cross layers of nerve cells and wiring before reaching the photoreceptors at the very back. Octopus and squid eyes are wired the sensible way round — so they have no blind spot.",
  },
  {
    emoji: "🧵",
    tag: "Science",
    text: "Light doesn't just blunder through the back-to-front retina. Funnel-shaped Müller cells span its full thickness and behave like living optical fibers, piping light past the wiring to the photoreceptors — shown experimentally in 2007.",
  },
  {
    emoji: "🗜️",
    tag: "Science",
    text: "Your retina compresses before it transmits: around 100 million photoreceptors feed just one million or so optic-nerve fibers. Edges, contrast, and motion are extracted inside the eye — the brain never receives the raw image.",
  },
  {
    emoji: "🔥",
    tag: "Science",
    text: "Gram for gram, the retina is one of the most energy-hungry tissues in your body — its oxygen consumption rivals or exceeds the brain's, mostly to power the ion pumps that keep photoreceptors ready to fire.",
  },
  {
    emoji: "♻️",
    tag: "Science",
    text: "Photoreceptors wear out from the tip. Every day each rod sheds roughly a tenth of its light-catching discs, which a neighboring cell layer eats, while fresh discs are built at the base — the whole stack is renewed about every ten days.",
  },
  {
    emoji: "🧓",
    tag: "Science",
    text: "The cells at the core of your lens ejected their nuclei before you were born and can never replace their proteins. Carbon-14 dating confirms it: the crystallin proteins at the center of your lens are as old as you are.",
  },
  {
    emoji: "🪟",
    tag: "Science",
    text: "The cornea is clear and the white of the eye is opaque, yet both are made of collagen. The difference is order: corneal fibers are uniformly thin and spaced in a lattice finer than the wavelength of light, so scattered light cancels itself out.",
  },
  {
    emoji: "🚰",
    tag: "Science",
    text: "A single layer of cells on the back of the cornea spends your whole life pumping water out to keep it clear — and in humans those cells barely divide. You start with several thousand per square millimeter and the count only falls; too few, and the cornea swells and fogs.",
  },
  {
    emoji: "🪡",
    tag: "Anatomy",
    text: "The cornea is one of the most densely nerve-packed tissues in the body — by common estimates hundreds of times more sensitive than skin — which is why a single grain of sand feels like a boulder.",
  },
  {
    emoji: "🎯",
    tag: "Anatomy",
    text: "At the dead center of your fovea, cones are packed to nearly 200,000 per square millimeter, with no rods and no blood vessels in the way. Because there are no rods there, a faint star is easier to see if you look slightly to one side of it.",
  },
  {
    emoji: "🔵",
    tag: "Science",
    text: "Blue-sensing cones make up only around 5–10% of your cones, and the very center of the fovea has none at all. Tiny blue details are literally invisible there — a quirk called small-field tritanopia.",
  },
  {
    emoji: "🧬",
    tag: "Science",
    text: "The genes for the red and green cone pigments sit side by side on the X chromosome and are about 96% identical, so they are easily shuffled or lost when DNA is copied. That is why roughly 1 in 12 men of European descent, but only about 1 in 200 women, are red-green colorblind.",
  },
  {
    emoji: "🌈",
    tag: "Science",
    text: "Some women carry four types of cone instead of three. In lab tests, at least one has been confirmed as a true tetrachromat — able to tell apart color mixtures that look identical to everyone else.",
  },
  {
    emoji: "💜",
    tag: "Science",
    text: "Magenta is not in the rainbow. No single wavelength of light looks magenta — it is the color your brain invents when the red-sensing and blue-sensing cones fire together and the green-sensing ones stay quiet.",
  },
  {
    emoji: "🟣",
    tag: "Science",
    text: "Your retina can respond to near-ultraviolet light; the lens just blocks it. People who have had a lens removed sometimes report seeing UV as a whitish blue-violet — and Monet's palette is said to have shifted after his cataract surgery in 1923.",
  },
  {
    emoji: "🌆",
    tag: "Science",
    text: "At dusk your eye's peak sensitivity slides from yellow-green (about 555 nm, cones) toward blue-green (about 507 nm, rods). Red flowers fade to black while blue ones seem to glow — the Purkinje shift, first described in 1819.",
  },
  {
    emoji: "🌙",
    tag: "Science",
    text: "Moonlight is just reflected sunlight, with nearly the same colors — a moonlit landscape looks gray-blue only because the light is too dim for your cones, leaving a single type of rod that cannot compare wavelengths.",
  },
  {
    emoji: "🎚️",
    tag: "Science",
    text: "Your eyes work from starlight to noon sunshine, a range of roughly ten billion to one in brightness. The pupil accounts for only about a sixteen-fold of that; the rest is chemistry and neural gain control inside the retina.",
  },
  {
    emoji: "🕯️",
    tag: "Science",
    text: "In 1942, Hecht, Shlaer and Pirenne showed that a dark-adapted person can see a flash delivering only about 100 photons to the eye — of which a mere 5 to 7 are actually absorbed by rods. Human vision operates close to the physical limit.",
  },
  {
    emoji: "🔥",
    tag: "Science",
    text: "How far away can you see a candle? Not the \"30 miles\" of legend: a 2015 study comparing a candle flame with stars of known brightness put the limit for the naked eye at roughly 2.6 km.",
  },
  {
    emoji: "🌌",
    tag: "Science",
    text: "The farthest thing you can see with the naked eye is the Andromeda galaxy, about 2.5 million light-years away. The photons landing on your retina set out before our species existed.",
  },
  {
    emoji: "📐",
    tag: "Science",
    text: "20/20 vision means resolving details one arcminute apart — a sixtieth of a degree. Foveal cones are spaced about half an arcminute apart, which is just what is needed to sample the sharpest image the eye's optics can physically deliver.",
  },
  {
    emoji: "📏",
    tag: "Science",
    text: "You can detect that two lines are misaligned by a few arcseconds — several times less than the width of a single cone. This \"hyperacuity\" is computed by the brain, pooling signals across many photoreceptors.",
  },
  {
    emoji: "🕰️",
    tag: "Science",
    text: "In the early 2000s scientists confirmed a third kind of photoreceptor: rare retinal ganglion cells containing melanopsin, most sensitive to blue light near 480 nm. They form no images — they set your body clock and pupil size, and can keep working in some people who are otherwise totally blind.",
  },
  {
    emoji: "⏳",
    tag: "Science",
    text: "You live slightly in the past. It takes the visual system several tens of milliseconds to turn light into perception, so the brain routinely extrapolates moving objects forward to compensate — which is how you can catch a ball at all.",
  },
  {
    emoji: "🧠",
    tag: "Science",
    text: "In macaque monkeys, roughly half of the cerebral cortex is involved in processing vision, spread across more than 30 distinct areas. Seeing is the single most expensive thing a primate brain does.",
  },
  {
    emoji: "🔀",
    tag: "Science",
    text: "At the optic chiasm about half of each optic nerve's fibers cross to the other side. The result: each half of your brain sees the opposite half of the visual world — through both eyes — not the opposite eye.",
  },
  {
    emoji: "🕶️",
    tag: "Science",
    text: "Blindsight: some people with damage to the primary visual cortex insist they see nothing in part of their visual field, yet can point to objects there, or dodge them, far better than chance. Vision and the awareness of seeing run on separable pathways.",
  },
  {
    emoji: "🙂",
    tag: "Science",
    text: "A patch of cortex called the fusiform face area is specialized for faces. Roughly 1 in 50 people are estimated to have developmental prosopagnosia — normal eyesight, but faces, sometimes even their own family's, do not \"click\" as individuals.",
  },
  {
    emoji: "🥽",
    tag: "Science",
    text: "Your eyes sit about 6 cm apart, and your brain computes depth from the tiny mismatches between their two views. Random-dot stereograms, introduced by Béla Julesz around 1960, proved this works even when neither eye alone sees any shape at all.",
  },
  {
    emoji: "🧭",
    tag: "Science",
    text: "Shake your head while reading this and the words stay sharp; shake the screen instead and they blur. The vestibulo-ocular reflex counter-rotates your eyes within about 10 milliseconds of a head movement, using a circuit just three neurons long.",
  },
  {
    emoji: "🏎️",
    tag: "Science",
    text: "Saccades — the jumps your eyes make between fixation points — are the fastest movements the human body produces, peaking above 500 degrees per second. You make two or three every second you are awake.",
  },
  {
    emoji: "🌊",
    tag: "Science",
    text: "Watch a waterfall for a minute, then look at the rocks beside it: they appear to drift upward. Motion-sensing neurons tuned to \"down\" have tired, leaving the \"up\" ones to dominate. Aristotle described the effect over 2,300 years ago.",
  },
  {
    emoji: "🧬",
    tag: "Science",
    text: "Eyes of very different designs across the animal kingdom are all switched on by the same master control gene, Pax6. In a famous 1995 experiment, the mouse version of the gene was activated in a fruit fly's leg — and a fly eye grew there.",
  },
  {
    emoji: "🧮",
    tag: "Science",
    text: "How long does an eye take to evolve? A 1994 model by Nilsson and Pelger, using deliberately pessimistic assumptions, found a flat light-sensitive patch could become a focused camera eye in fewer than 400,000 generations — a geological blink.",
  },
  {
    emoji: "🐟",
    tag: "Fun Stuff",
    text: "A zebrafish can regrow a damaged retina: support cells called Müller glia turn back into stem cells and rebuild the lost neurons. Humans have the same cells, but ours stay stubbornly silent — getting them to wake up is a major research goal.",
  },
  {
    emoji: "🏊",
    tag: "Science",
    text: "Everything blurs underwater because the cornea's focusing power depends on the jump from air into tissue — and water is optically almost the same as the cornea. Children of the sea-going Moken people learn to see about twice as sharply underwater by shrinking their pupils and maximally focusing their lenses.",
  },
  {
    emoji: "💦",
    tag: "Anatomy",
    text: "The clear fluid in the front of your eye is made at about 2.5 microliters a minute, so the whole chamber's contents are replaced roughly every hour and a half. Eye pressure is simply the balance between that tap and its drain.",
  },
  {
    emoji: "🍮",
    tag: "Anatomy",
    text: "The vitreous — the clear gel filling the back of your eye — makes up about four-fifths of the eyeball's volume and is roughly 99% water, held in shape by a sparse scaffold of collagen and hyaluronic acid.",
  },
  {
    emoji: "🎇",
    tag: "Science",
    text: "Look at a clear blue sky and you may notice tiny bright dots darting along squiggly paths. Those are your own white blood cells, moving through the capillaries in front of your retina — the blue field entoptic phenomenon.",
  },
  {
    emoji: "🚀",
    tag: "Science",
    text: "Apollo astronauts reported flashes of light with their eyes closed. The culprit: cosmic rays passing through their eyes and triggering the retina directly. Pressing gently on a closed eyelid produces similar \"phosphenes\" — the retina reports any stimulation as light.",
  },
  {
    emoji: "😢",
    tag: "Science",
    text: "You make three kinds of tears: basal tears that coat the eye all day, reflex tears that flush out irritants, and emotional tears. As far as scientists can tell, humans are the only animals that weep the third kind.",
  },
  {
    emoji: "🛡️",
    tag: "Science",
    text: "The eye is \"immune privileged\": it actively damps down inflammation, which would wreck its delicate optics. That is a big reason corneal transplants — the most common tissue transplant — usually succeed without the donor matching that kidneys or hearts need.",
  },
  {
    emoji: "🌞",
    tag: "Science",
    text: "Why does time outdoors protect children from nearsightedness? The leading explanation is that bright light triggers dopamine release in the retina, which slows the eyeball's elongation. In a trial in Guangzhou, 40 extra minutes outside each school day cut new cases of myopia over three years.",
  },
  {
    emoji: "👶",
    tag: "Science",
    text: "Babies are born farsighted, and the eye then grows itself into focus, using the blur of the retinal image as its guide. Put a lens in front of a growing chick's eye and the eyeball changes its length to cancel the lens out.",
  },
  {
    emoji: "👁️",
    tag: "Science",
    text: "Everyone with blue eyes may share one ancestor. A 2008 genetic study traced blue eyes to a single mutation near the OCA2 gene that dials down brown pigment in the iris, which probably arose 6,000 to 10,000 years ago.",
  },
  {
    emoji: "🍼",
    tag: "Science",
    text: "A newborn's vision is roughly 20/400 and focuses best at about 20–30 cm — close to the distance to the face of whoever is holding them. Adult-level sharpness takes years to develop.",
  },
  {
    emoji: "🔍",
    tag: "Science",
    text: "At age 10 your lens can add about 14 diopters of focusing power — enough to see clearly a few centimeters from your nose. By 60 it manages about one. Presbyopia is not a disease; it is the far end of a decline that began in childhood.",
  },
  {
    emoji: "🤍",
    tag: "Science",
    text: "Human eyes have unusually large, bright whites compared with other primates, which makes it easy to tell where someone is looking. The \"cooperative eye\" hypothesis proposes this evolved to help us communicate by gaze — though the idea is still debated.",
  },
  {
    emoji: "🧬",
    tag: "Tech",
    text: "In 2017 the US FDA approved Luxturna, the first gene therapy for an inherited disease: a working copy of the RPE65 gene, carried by a harmless virus and injected under the retina, for a form of childhood-onset blindness.",
  },
  {
    emoji: "🧫",
    tag: "Tech",
    text: "In 2021, doctors reported the first partial recovery of vision using optogenetics: a light-sensitive protein from algae was delivered to the retinal cells of a man blinded by retinitis pigmentosa, and with special goggles he could locate and count objects on a table.",
  },
  {
    emoji: "✂️",
    tag: "Tech",
    text: "The first time CRISPR gene editing was used directly inside a living person's body, in 2020, the target was the eye — a trial for an inherited form of childhood blindness. The eye is small, accessible, and immune-sheltered, which makes it medicine's favorite testing ground.",
  },

  // ---------- Medicine: eye disease, drugs, surgery, and the trials behind them ----------
  {
    emoji: "💉",
    tag: "Medicine",
    text: "Avastin (bevacizumab) is licensed as a cancer drug — first approved in 2004 for bowel cancer — and has never been approved for use in the eye. Yet since 2005 eye doctors around the world have injected it \"off-label\" for wet AMD, with pharmacies dividing one cancer-sized vial into dozens of tiny eye doses.",
  },
  {
    emoji: "⚖️",
    tag: "Medicine",
    text: "\"Off-label\" doesn't mean illegal or experimental: doctors may prescribe an approved drug for another use when the evidence supports it, but the manufacturer can't promote it. Avastin's maker never applied for an eye licence — so the cheapest wet AMD treatment is one that officially isn't a wet AMD treatment.",
  },
  {
    emoji: "🥊",
    tag: "Trials",
    text: "With no company willing to test cheap Avastin against costly Lucentis, the US National Eye Institute paid for the head-to-head itself. The CATT trial of about 1,200 wet AMD patients reported in 2011: given monthly, the two drugs preserved vision equally well. The UK's IVAN trial agreed.",
  },
  {
    emoji: "🏛️",
    tag: "Medicine",
    text: "In 2018 the High Court in England ruled that NHS commissioners could lawfully offer Avastin to wet AMD patients as a cheaper option, even though it is unlicensed for the eye — after the makers of the two licensed drugs went to court to stop them.",
  },
  {
    emoji: "🧪",
    tag: "Medicine",
    text: "Splitting Avastin into eye-sized syringes has to be done under strictly sterile conditions. In 2011, a dozen patients in Miami suffered severe eye infections, several losing their sight, from a single contaminated batch prepared by one compounding pharmacy.",
  },
  {
    emoji: "🩸",
    tag: "Medicine",
    text: "Wet AMD is a plumbing failure: the starved retina releases a signal called VEGF, and fragile new blood vessels grow under the macula, leaking fluid and blood. Drugs like Lucentis, Eylea, and Avastin work by mopping up VEGF so the vessels dry out.",
  },
  {
    emoji: "🧬",
    tag: "Medicine",
    text: "VEGF, the molecule behind wet AMD, was isolated in 1989 by Napoleone Ferrara at Genentech, who was studying how tumors grow their own blood supply. The antibody built to starve cancers became, almost by accident, the biggest advance in eye medicine in a generation.",
  },
  {
    emoji: "📈",
    tag: "Trials",
    text: "Before anti-VEGF drugs, wet AMD usually meant losing central vision. In the 2006 MARINA trial, about 95% of patients on monthly ranibizumab (Lucentis) avoided significant vision loss, versus 62% on sham treatment — and a third actually gained three lines or more on the eye chart.",
  },
  {
    emoji: "🎯",
    tag: "Medicine",
    text: "An injection into the eye goes through the white, about 3.5–4 mm behind the edge of the cornea — a safe zone (the pars plana) where there is no retina to hit. The dose is just 0.05 ml, about one drop, and the needle is finer than those used for vaccines.",
  },
  {
    emoji: "🦠",
    tag: "Medicine",
    text: "The feared complication of an eye injection is endophthalmitis, an infection inside the eyeball. It is rare — on the order of 1 in several thousand injections — which matters because many wet AMD patients receive injections every month or two for years.",
  },
  {
    emoji: "🪤",
    tag: "Medicine",
    text: "Eylea (aflibercept), approved in 2011, isn't an antibody at all but a \"VEGF trap\": pieces of the body's own VEGF receptors fused onto an antibody stem. It grips VEGF more tightly than the receptors do, so many patients need injections only every two months.",
  },
  {
    emoji: "✌️",
    tag: "Medicine",
    text: "Vabysmo (faricimab), approved in 2022, was the first bispecific antibody for the eye: one arm blocks VEGF, the other blocks angiopoietin-2, a second signal that destabilizes blood vessels. Some patients can go four months between injections.",
  },
  {
    emoji: "🧷",
    tag: "Medicine",
    text: "The first anti-VEGF eye drug wasn't an antibody but an aptamer — a short strand of synthetic RNA folded to grab VEGF. Macugen (pegaptanib) was approved for wet AMD in 2004 and was overtaken by Lucentis within two years.",
  },
  {
    emoji: "🍚",
    tag: "Medicine",
    text: "Susvimo is a refillable implant about the size of a grain of rice, surgically fixed in the wall of the eye, that releases ranibizumab continuously. Instead of an injection every month or two, it is topped up through a needle about every six months.",
  },
  {
    emoji: "🌾",
    tag: "Medicine",
    text: "\"Dry\" AMD is far more common than wet, and for decades had no treatment at all. The first drugs for its advanced form, geographic atrophy, were approved in the US only in 2023 — they block part of the immune system's complement cascade and slow the damage, but cannot reverse it.",
  },
  {
    emoji: "🎯",
    tag: "Medicine",
    text: "Age-related macular degeneration destroys the center of vision and spares the edges: people can walk around a room but cannot read or recognize a face. It affects roughly 200 million people worldwide and is the leading cause of sight loss in older adults in high-income countries.",
  },
  {
    emoji: "📰",
    tag: "Medicine",
    text: "A simple grid of straight lines — the Amsler grid, introduced in 1945 — is still used to catch wet AMD at home. If the lines suddenly look wavy or a patch goes missing, fluid may be lifting the macula, and that needs checking within days.",
  },
  {
    emoji: "🟡",
    tag: "Medicine",
    text: "The earliest visible sign of AMD is drusen: small yellowish deposits of fat and protein that build up beneath the retina. A few small ones are a normal part of aging; many large ones mark a raised risk of sight loss.",
  },
  {
    emoji: "🍬",
    tag: "Medicine",
    text: "Diabetic retinopathy is among the leading causes of blindness in working-age adults: years of high blood sugar damage the retina's finest blood vessels, which leak, close off, and then sprout fragile replacements. Around one in three people with diabetes has some degree of it.",
  },
  {
    emoji: "📸",
    tag: "Medicine",
    text: "England began photographing the retinas of everyone with diabetes in the 2000s. By 2010, for the first time in at least five decades, diabetic eye disease was no longer the leading cause of certified blindness among working-age adults in England and Wales.",
  },
  {
    emoji: "👓",
    tag: "Medicine",
    text: "High blood sugar can change your glasses prescription: sugar and water are drawn into the lens, which swells and shifts its focus. That is why blurred vision is a classic early symptom of diabetes — and why new glasses should wait until sugar levels settle.",
  },
  {
    emoji: "🔦",
    tag: "Trials",
    text: "In 1976 the Diabetic Retinopathy Study showed that scattering hundreds of laser burns across the outer retina cut the risk of severe vision loss by more than half. It was so clear-cut that the trial was changed early so untreated eyes could be offered the laser.",
  },
  {
    emoji: "🔠",
    tag: "Trials",
    text: "Eye-drug trials count success in letters. The ETDRS chart, designed for a 1980s diabetic retinopathy trial, has five letters on every line with evenly stepped sizes — so \"gained 15 letters\" means three lines better, the same as halving the size of the smallest letter you can read.",
  },
  {
    emoji: "🎭",
    tag: "Trials",
    text: "How do you give a placebo injection into an eye? In many trials the control group gets a \"sham\": the eye is numbed and cleaned as usual, then a syringe with no needle is pressed against it. Patients generally can't tell the difference.",
  },
  {
    emoji: "🥷",
    tag: "Medicine",
    text: "Glaucoma is called the silent thief of sight: it erodes the edges of vision first, slowly and painlessly, and the brain fills in the gaps. Around half of the roughly 80 million people who have it are thought not to know.",
  },
  {
    emoji: "🧯",
    tag: "Medicine",
    text: "Glaucoma isn't simply \"high eye pressure.\" Many patients have pressure in the normal range, and many people with raised pressure never develop it. Yet lowering pressure is still the only proven treatment — it slows the damage in both groups.",
  },
  {
    emoji: "💈",
    tag: "Medicine",
    text: "Eye pressure is measured by flattening a small circle of cornea, just over 3 mm wide, and reading the force needed — a method Hans Goldmann introduced in the 1950s. A thicker-than-average cornea makes the reading falsely high, so its thickness is measured too.",
  },
  {
    emoji: "🪮",
    tag: "Medicine",
    text: "The most-prescribed glaucoma drops, prostaglandin analogs such as latanoprost, have odd side effects: longer, darker eyelashes and sometimes a permanently browner iris. One of them, bimatoprost, was later approved as an eyelash-growing cosmetic treatment.",
  },
  {
    emoji: "🌫️",
    tag: "Medicine",
    text: "A cataract is the lens's crystal-clear proteins slowly clumping together and scattering light, like egg white turning opaque as it cooks. It is the leading cause of blindness worldwide — and the cure is a short operation.",
  },
  {
    emoji: "🦷",
    tag: "Medicine",
    text: "Modern cataract surgery was inspired by a dentist's ultrasonic cleaner. In 1967 Charles Kelman introduced phacoemulsification: a vibrating needle breaks the cloudy lens into fragments and sucks them out through a cut only a few millimeters wide, with no stitches needed.",
  },
  {
    emoji: "🏺",
    tag: "Medicine",
    text: "Cataract surgery is thousands of years old. In \"couching,\" described in ancient Indian texts attributed to the surgeon Sushruta, a needle was used to push the cloudy lens backward out of the line of sight. It let light in again, but without a replacement lens the world stayed badly out of focus.",
  },
  {
    emoji: "📐",
    tag: "Medicine",
    text: "Before cataract surgery, the length of your eye is measured with light to within hundredths of a millimeter, to choose the power of the implant. It needs to be that precise: an error of one millimeter would leave you about 2.5 to 3 diopters out of focus.",
  },
  {
    emoji: "🦃",
    tag: "Tech",
    text: "The laser used in LASIK was first tried on Thanksgiving turkey leftovers. In 1981, IBM researchers found that an ultraviolet excimer laser could etch living tissue cleanly without burning its surroundings. Each pulse removes about a quarter of a micron of cornea.",
  },
  {
    emoji: "🧲",
    tag: "Medicine",
    text: "Keratoconus, in which the cornea thins and bulges into a cone, can now be halted. In corneal cross-linking, the cornea is soaked in riboflavin (vitamin B2) and exposed to ultraviolet light, which forms new bonds between its collagen fibers and stiffens it.",
  },
  {
    emoji: "🫧",
    tag: "Medicine",
    text: "In the most delicate corneal transplant, DMEK, surgeons replace only the cornea's innermost layer — a sheet about 10 to 15 microns thick, thinner than cling film. It is floated into position and pressed into place with an air bubble; there are no stitches.",
  },
  {
    emoji: "🎈",
    tag: "Medicine",
    text: "To fix a detached retina, surgeons often leave a gas bubble inside the eye to press the retina back in place while it heals — which is why patients may be told to keep their head in a set position for days. Flying is banned until it dissolves: at altitude the bubble expands and pressure in the eye soars.",
  },
  {
    emoji: "🏴‍☠️",
    tag: "Medicine",
    text: "A \"lazy eye\" (amblyopia) is really a brain problem: if one eye sends a blurred or misaligned image in early childhood, the brain learns to ignore it. It affects about 2–3% of children, and patching the stronger eye works best while the visual system is still developing.",
  },
  {
    emoji: "📷",
    tag: "Medicine",
    text: "A family photo can reveal a childhood eye cancer. In retinoblastoma, the tumor can reflect a camera flash, making one pupil look white instead of red. Caught early, more than 95% of children in high-income countries survive.",
  },
  {
    emoji: "🧬",
    tag: "Medicine",
    text: "The eye gave cancer science one of its foundations. Studying retinoblastoma, Alfred Knudson proposed in 1971 that a cell must lose both copies of a protective gene to turn cancerous — and that gene, RB1, became the first tumor-suppressor gene ever identified.",
  },
  {
    emoji: "👶",
    tag: "Medicine",
    text: "In the 1940s and early 1950s, some 10,000 premature babies went blind before doctors found the cause: the high-oxygen incubators keeping them alive were disrupting the growth of retinal blood vessels. Retinopathy of prematurity is why oxygen for newborns is now so carefully controlled. Stevie Wonder is among those it affected.",
  },
  {
    emoji: "💛",
    tag: "Medicine",
    text: "To map the retina's blood vessels, a fluorescent orange dye is injected into a vein in the arm. It reaches the eye in about 10 to 15 seconds and glows under blue light, revealing leaks and blockages. For a day afterward your skin looks slightly yellow and your urine turns bright.",
  },
  {
    emoji: "⏱️",
    tag: "Medicine",
    text: "The drops used to dilate your pupils block the signal that makes the iris muscle constrict. The usual one, tropicamide, wears off in a few hours — atropine, used in some treatments, can keep a pupil wide for a week or more.",
  },
  {
    emoji: "🧠",
    tag: "Medicine",
    text: "Inflammation of the optic nerve (optic neuritis) is often the first sign of multiple sclerosis. It typically causes pain when moving the eye and vision that dims over days — and colors, especially red, look washed out in the affected eye.",
  },
  {
    emoji: "🫀",
    tag: "Tech",
    text: "In 2018 Google researchers showed that an AI could look at a photograph of the retina and predict a person's age to within about three years, their sex, their blood pressure, and whether they smoke — things no eye doctor can see. Reading general health from the eye now has a name: oculomics.",
  },
  {
    emoji: "✍️",
    tag: "Medicine",
    text: "Injure one eye badly enough and the immune system can attack the healthy one too — sympathetic ophthalmia. It is thought to be how Louis Braille went completely blind: he injured one eye with a tool in his father's workshop at age three and had lost the sight of both by five.",
  },
  {
    emoji: "👻",
    tag: "Medicine",
    text: "People who lose a lot of sight sometimes see vivid things that are not there — patterns, faces, tiny figures in costume — while knowing perfectly well they are not real. It is Charles Bonnet syndrome, first described in 1760: a visual brain deprived of input starts generating its own. It is not a mental illness.",
  },
  {
    emoji: "🤧",
    tag: "Medicine",
    text: "Most infectious pink eye in adults is caused by viruses, usually adenoviruses — so antibiotic drops do nothing for it. It clears by itself in a week or two but is highly contagious in the meantime.",
  },
  {
    emoji: "🩸",
    tag: "Medicine",
    text: "A bright red patch on the white of the eye looks alarming but is usually harmless: a tiny vessel has burst under the clear surface membrane, often after a cough or sneeze. It is a bruise that cannot hide under skin, and it clears in a week or two.",
  },
  {
    emoji: "💙",
    tag: "Medicine",
    text: "Viagra can briefly tint vision blue. Sildenafil blocks an enzyme called PDE5 — but it also weakly blocks the closely related PDE6, which photoreceptors use to convert light into a signal.",
  },
  {
    emoji: "🎯",
    tag: "Medicine",
    text: "Hydroxychloroquine, widely used for lupus and rheumatoid arthritis, can after years of use damage the retina in a ring around the fovea — \"bull's-eye maculopathy.\" The damage is irreversible, so long-term users are offered regular retinal scans to catch it early.",
  },
  {
    emoji: "💊",
    tag: "Medicine",
    text: "Steroids help many eye diseases but have two well-known costs in the eye: they can raise eye pressure — markedly in a minority of people called steroid responders — and long-term use can cause cataracts.",
  },
  {
    emoji: "💉",
    tag: "Medicine",
    text: "Botox began as an eye treatment. Ophthalmologist Alan Scott developed botulinum toxin in the 1970s to relax overactive eye muscles in squint, and its first approval, in 1989, was for squint and eyelid spasm. The wrinkle-smoothing effect was noticed by an eye doctor treating patients' eyelids.",
  },
  {
    emoji: "☀️",
    tag: "Medicine",
    text: "The first retinal \"laser\" was sunlight. In the 1940s, German ophthalmologist Gerd Meyer-Schwickerath, after seeing retinal burns in patients who had watched a solar eclipse, used mirrors on a clinic roof to focus sunlight into eyes and weld retinal tears shut.",
  },
  {
    emoji: "🦷",
    tag: "Medicine",
    text: "In one of surgery's strangest procedures — \"tooth-in-eye\" surgery, devised in the 1960s — a patient's own tooth is removed, drilled to hold a plastic lens, and implanted in the front of the eye. It can restore sight when the cornea is too scarred for an ordinary transplant.",
  },
  {
    emoji: "🤖",
    tag: "Tech",
    text: "The first approved \"bionic eye,\" Argus II, reached patients in 2013: a camera on glasses sent signals to 60 electrodes on the retina, giving people blind from retinitis pigmentosa spots of light and shapes. Its maker stopped supporting it around 2020, leaving users with obsolete implants.",
  },
  {
    emoji: "🔋",
    tag: "Tech",
    text: "A 2 mm wireless chip placed under the retina can partly replace lost photoreceptors. In results published in 2025, most trial participants with advanced dry AMD who received the PRIMA implant could read letters and words again with their treated eye.",
  },
  {
    emoji: "👁️",
    tag: "Medicine",
    text: "In 2023 surgeons in New York performed the first whole-eye transplant, alongside a partial face transplant. The donated eye stayed healthy with good blood flow, but did not see — reconnecting the million fibers of the optic nerve remains unsolved.",
  },
  {
    emoji: "🔍",
    tag: "Medicine",
    text: "Eye drops for reading glasses exist: Vuity, approved in the US in 2021, uses pilocarpine to shrink the pupil. A smaller pupil increases depth of focus — the same pinhole effect that makes you squint to read small print.",
  },
  {
    emoji: "©️",
    tag: "Medicine",
    text: "When patents on biologic drugs expire, near-copies called biosimilars can be sold. The first for the eye, a ranibizumab biosimilar, was approved in the US in 2021.",
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
    case "Medicine":
      return "#fbd9a0"; // apricot, between coral and banana
    case "Science":
      return "#bfe9ea"; // pearl-aqua mid
    case "Tech":
      return "#80ced0"; // pearl-aqua
    default:
      return "#e7e7e7"; // light-grey
  }
}
