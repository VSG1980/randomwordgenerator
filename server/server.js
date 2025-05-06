import express from "express";
const app = express();

import cors from "cors";

app.use(cors());

const randomwords = [
  [
    {
      word: "Luminous",
      definition: "Radiating or reflecting light; shining; bright.",
      example: "The moon was luminous in the clear night sky.",
    },
    {
      word: "Obfuscate",
      definition: "To make something unclear or obscure.",
      example: "The company used legal jargon to obfuscate the terms.",
    },
    {
      word: "Zephyr",
      definition: "A soft gentle breeze.",
      example: "A zephyr rustled the curtains in the open window.",
    },
    {
      word: "Serendipity",
      definition:
        "The occurrence of events by chance in a happy or beneficial way.",
      example: "Meeting her was pure serendipity.",
    },
    {
      word: "Voracious",
      definition: "Wanting or devouring great quantities of food.",
      example: "He had a voracious appetite after the marathon.",
    },
    {
      word: "Ephemeral",
      definition: "Lasting for a very short time.",
      example: "The beauty of a sunset is often ephemeral.",
    },
    {
      word: "Cacophony",
      definition: "A harsh, discordant mixture of sounds.",
      example: "The cacophony of city traffic was overwhelming.",
    },
    {
      word: "Nefarious",
      definition: "Wicked or criminal.",
      example: "The villain hatched a nefarious plot.",
    },
    {
      word: "Ineffable",
      definition: "Too great or extreme to be expressed in words.",
      example: "Her joy was ineffable.",
    },
    {
      word: "Quintessential",
      definition: "Representing the most perfect example of a quality.",
      example: "He is the quintessential gentleman.",
    },
    {
      word: "Eloquent",
      definition: "Fluent or persuasive in speaking or writing.",
      example: "She gave an eloquent speech at the conference.",
    },
    {
      word: "Solitude",
      definition: "The state of being alone.",
      example: "He sought solitude in the mountains.",
    },
    {
      word: "Resilient",
      definition: "Able to recover quickly from difficulties.",
      example: "Children are often very resilient.",
    },
    {
      word: "Aloof",
      definition: "Not friendly or forthcoming; cool and distant.",
      example: "She remained aloof during the discussion.",
    },
    {
      word: "Esoteric",
      definition:
        "Intended for or likely to be understood by only a small number of people.",
      example: "The lecture was filled with esoteric concepts.",
    },
    {
      word: "Melancholy",
      definition: "A feeling of pensive sadness.",
      example: "There was a hint of melancholy in his eyes.",
    },
    {
      word: "Ubiquitous",
      definition: "Present, appearing, or found everywhere.",
      example: "Smartphones have become ubiquitous.",
    },
    {
      word: "Plethora",
      definition: "A large or excessive amount of something.",
      example: "The shop offers a plethora of choices.",
    },
    {
      word: "Ambivalent",
      definition: "Having mixed feelings about something.",
      example: "She was ambivalent about moving abroad.",
    },
    {
      word: "Juxtapose",
      definition: "To place side by side for contrast.",
      example: "The film juxtaposes beauty and horror.",
    },
    {
      word: "Gregarious",
      definition: "Fond of company; sociable.",
      example: "He’s a gregarious and friendly host.",
    },
    {
      word: "Reverence",
      definition: "Deep respect for someone or something.",
      example: "They bowed in reverence.",
    },
    {
      word: "Insatiable",
      definition: "Impossible to satisfy.",
      example: "He had an insatiable hunger for knowledge.",
    },
    {
      word: "Belligerent",
      definition: "Hostile and aggressive.",
      example: "His belligerent attitude caused tension.",
    },
    {
      word: "Euphoria",
      definition: "A feeling of intense excitement and happiness.",
      example: "Winning the award filled her with euphoria.",
    },
    {
      word: "Fortuitous",
      definition: "Happening by chance; lucky.",
      example: "Their meeting was entirely fortuitous.",
    },
    {
      word: "Epitome",
      definition: "A perfect example of a quality or type.",
      example: "She is the epitome of grace.",
    },
    {
      word: "Capricious",
      definition: "Given to sudden changes of mood or behavior.",
      example: "The weather here is capricious.",
    },
    {
      word: "Succinct",
      definition: "Briefly and clearly expressed.",
      example: "He gave a succinct summary.",
    },
    {
      word: "Tenacious",
      definition: "Holding firmly to a belief or goal.",
      example: "Her tenacious spirit helped her succeed.",
    },
    {
      word: "Benevolent",
      definition: "Well-meaning and kindly.",
      example: "A benevolent smile spread across her face.",
    },
    {
      word: "Magnanimous",
      definition: "Generous or forgiving.",
      example: "He was magnanimous in victory.",
    },
    {
      word: "Fervent",
      definition: "Having or displaying passionate intensity.",
      example: "She gave a fervent plea for justice.",
    },
    {
      word: "Lucid",
      definition: "Expressed clearly; easy to understand.",
      example: "His explanation was lucid and helpful.",
    },
    {
      word: "Eclectic",
      definition: "Deriving ideas from a diverse range of sources.",
      example: "Her music taste is eclectic.",
    },
    {
      word: "Nostalgia",
      definition: "A sentimental longing for the past.",
      example: "Old photos brought a wave of nostalgia.",
    },
    {
      word: "Inevitable",
      definition: "Certain to happen; unavoidable.",
      example: "A confrontation was inevitable.",
    },
    {
      word: "Pensive",
      definition: "Engaged in deep or serious thought.",
      example: "He sat in pensive silence.",
    },
    {
      word: "Audacious",
      definition: "Showing a willingness to take bold risks.",
      example: "An audacious move that shocked everyone.",
    },
    {
      word: "Inundate",
      definition: "To overwhelm with things or people.",
      example: "She was inundated with emails.",
    },
    {
      word: "Ethereal",
      definition: "Extremely delicate and light.",
      example: "The music had an ethereal quality.",
    },
    {
      word: "Amicable",
      definition: "Friendly and without disagreement.",
      example: "They reached an amicable solution.",
    },
    {
      word: "Candor",
      definition: "The quality of being open and honest.",
      example: "He spoke with refreshing candor.",
    },
    {
      word: "Jubilant",
      definition: "Feeling or expressing great happiness.",
      example: "Fans were jubilant after the win.",
    },
    {
      word: "Loquacious",
      definition: "Very talkative.",
      example: "She was charming and loquacious.",
    },
    {
      word: "Sagacious",
      definition: "Having good judgment; wise.",
      example: "A sagacious leader makes sound decisions.",
    },
    {
      word: "Vicarious",
      definition: "Experienced through another’s actions.",
      example: "She lived vicariously through her children.",
    },
    {
      word: "Incessant",
      definition: "Never stopping; continuous.",
      example: "The incessant noise kept them awake.",
    },
    {
      word: "Reclusive",
      definition: "Avoiding the company of others.",
      example: "The author was famously reclusive.",
    },
    {
      word: "Dexterous",
      definition: "Skillful with hands or mind.",
      example: "The magician was dexterous with his tricks.",
    },
    {
      word: "Mellifluous",
      definition: "Pleasant sounding; smooth and musical.",
      example: "Her mellifluous voice charmed the audience.",
    },
    {
      word: "Meticulous",
      definition: "Showing great attention to detail.",
      example: "He kept meticulous records of every transaction.",
    },
    {
      word: "Bucolic",
      definition: "Relating to the countryside; rural.",
      example: "They enjoyed a bucolic weekend getaway.",
    },
    {
      word: "Camaraderie",
      definition: "Mutual trust and friendship.",
      example: "There was great camaraderie among the teammates.",
    },
    {
      word: "Dubious",
      definition: "Hesitating or doubting.",
      example: "He gave her a dubious glance.",
    },
    {
      word: "Empathy",
      definition: "The ability to understand others’ feelings.",
      example: "She listened with empathy and concern.",
    },
    {
      word: "Fickle",
      definition: "Changing frequently in loyalty or interest.",
      example: "Public opinion can be very fickle.",
    },
    {
      word: "Gregarious",
      definition: "Enjoying the company of others.",
      example: "He was a gregarious and lively host.",
    },
    {
      word: "Hapless",
      definition: "Unlucky or unfortunate.",
      example: "The hapless hero stumbled into trouble.",
    },
    {
      word: "Impeccable",
      definition: "Perfect and without flaws.",
      example: "Her taste in fashion was impeccable.",
    },
    {
      word: "Keen",
      definition: "Highly developed or sharp.",
      example: "He had a keen sense of humor.",
    },
    {
      word: "Lament",
      definition: "To express sorrow or regret.",
      example: "She lamented the loss of her cat.",
    },
    {
      word: "Morose",
      definition: "Sullen and gloomy.",
      example: "He became morose after the breakup.",
    },
    {
      word: "Nuance",
      definition: "A subtle difference in meaning or tone.",
      example: "She understood every nuance of his speech.",
    },
    {
      word: "Opulent",
      definition: "Rich and luxurious.",
      example: "The mansion was filled with opulent decor.",
    },
    {
      word: "Perfunctory",
      definition: "Carried out with minimal effort.",
      example: "His apology was perfunctory at best.",
    },
    {
      word: "Quell",
      definition: "To put an end to something.",
      example: "Police tried to quell the protests.",
    },
    {
      word: "Rancor",
      definition: "Bitter resentment or ill will.",
      example: "There was long-standing rancor between them.",
    },
    {
      word: "Scintillating",
      definition: "Sparkling or brilliantly clever.",
      example: "Her scintillating wit impressed everyone.",
    },
    {
      word: "Trepidation",
      definition: "A feeling of fear or anxiety.",
      example: "She approached the stage with trepidation.",
    },
    {
      word: "Urbane",
      definition: "Sophisticated and charming.",
      example: "He was an urbane host and conversationalist.",
    },
    {
      word: "Vehement",
      definition: "Showing strong feeling; passionate.",
      example: "He gave a vehement denial of the accusation.",
    },
    {
      word: "Whimsical",
      definition: "Playfully quaint or fanciful.",
      example: "The decorations were colorful and whimsical.",
    },
    {
      word: "Yearn",
      definition: "To have an intense longing for something.",
      example: "She yearned for adventure.",
    },
    {
      word: "Zeal",
      definition: "Great energy in pursuit of a cause.",
      example: "He approached the project with zeal.",
    },
    {
      word: "Aesthetic",
      definition: "Concerned with beauty or appearance.",
      example: "The painting has a unique aesthetic.",
    },
    {
      word: "Bellwether",
      definition: "An indicator of trends.",
      example: "Tech stocks are often a bellwether of the market.",
    },
    {
      word: "Censure",
      definition: "Express severe disapproval.",
      example: "The senator faced censure for misconduct.",
    },
    {
      word: "Demure",
      definition: "Reserved and modest.",
      example: "She gave a demure smile.",
    },
    {
      word: "Effervescent",
      definition: "Bubbly and enthusiastic.",
      example: "Her effervescent personality lit up the room.",
    },
    {
      word: "Furtive",
      definition: "Secretive or sneaky.",
      example: "He cast a furtive glance over his shoulder.",
    },
    {
      word: "Guile",
      definition: "Cunning or sly behavior.",
      example: "He used guile to win the deal.",
    },
    {
      word: "Harangue",
      definition: "A lengthy and aggressive speech.",
      example: "She launched into a harangue about injustice.",
    },
    {
      word: "Irascible",
      definition: "Easily angered.",
      example: "The irascible coach yelled constantly.",
    },
    {
      word: "Jocular",
      definition: "Fond of joking; humorous.",
      example: "His jocular mood was contagious.",
    },
    {
      word: "Kudos",
      definition: "Praise for an achievement.",
      example: "He received kudos for his design.",
    },
    {
      word: "Livid",
      definition: "Furiously angry.",
      example: "She was livid about the broken promise.",
    },
    {
      word: "Myriad",
      definition: "A countless or extremely large number.",
      example: "There were myriad stars in the sky.",
    },
    {
      word: "Nonchalant",
      definition: "Calm and relaxed; not displaying anxiety.",
      example: "He gave a nonchalant shrug.",
    },
    {
      word: "Obstinate",
      definition: "Stubbornly refusing to change.",
      example: "The child was obstinate about his bedtime.",
    },
    {
      word: "Plausible",
      definition: "Seemingly reasonable or probable.",
      example: "His excuse sounded plausible.",
    },
    {
      word: "Querulous",
      definition: "Complaining in a whining manner.",
      example: "She became querulous when hungry.",
    },
    {
      word: "Ruminate",
      definition: "To think deeply about something.",
      example: "He ruminated over the decision for hours.",
    },
    {
      word: "Stoic",
      definition: "Enduring pain without showing feelings.",
      example: "She remained stoic during the ordeal.",
    },
    {
      word: "Terse",
      definition: "Brief and to the point.",
      example: "His reply was terse and dismissive.",
    },
    {
      word: "Usurp",
      definition: "Take (a position of power) illegally or by force.",
      example: "The general attempted to usurp the throne.",
    },
    {
      word: "Vociferous",
      definition: "Loud and forceful.",
      example: "The protestors were vociferous in their demands.",
    },
    {
      word: "Altruistic",
      definition: "Showing a selfless concern for others.",
      example: "Her altruistic acts earned her praise.",
    },
    {
      word: "Benevolent",
      definition: "Well-meaning and kindly.",
      example: "He was a benevolent ruler who cared for his people.",
    },
    {
      word: "Circumspect",
      definition: "Wary and unwilling to take risks.",
      example: "She was circumspect in her business dealings.",
    },
    {
      word: "Dissonance",
      definition: "Lack of harmony or agreement.",
      example: "There was dissonance between their views.",
    },
    {
      word: "Egregious",
      definition: "Outstandingly bad; shocking.",
      example: "He made an egregious error on the report.",
    },
    {
      word: "Fortuitous",
      definition: "Happening by chance, often luckily.",
      example: "It was fortuitous that they met that day.",
    },
    {
      word: "Haply",
      definition: "By chance; perhaps.",
      example: "Haply, she would find peace in solitude.",
    },
    {
      word: "Incorrigible",
      definition: "Not able to be corrected or improved.",
      example: "He was an incorrigible prankster.",
    },
    {
      word: "Juxtapose",
      definition: "To place side by side for comparison.",
      example: "The artist juxtaposed light and dark tones.",
    },
    {
      word: "Knell",
      definition: "The sound of a bell, especially for a death.",
      example: "The knell rang across the quiet fields.",
    },
    {
      word: "Loquacious",
      definition: "Very talkative.",
      example: "The loquacious man dominated the conversation.",
    },
    {
      word: "Maudlin",
      definition: "Excessively sentimental.",
      example: "He became maudlin after a few drinks.",
    },
    {
      word: "Nebulous",
      definition: "Unclear or vague.",
      example: "Her plans were still nebulous at best.",
    },
    {
      word: "Obsequious",
      definition: "Overly obedient or submissive.",
      example: "The assistant's obsequious manner was annoying.",
    },
    {
      word: "Pernicious",
      definition: "Having a harmful effect.",
      example: "The rumor had a pernicious impact.",
    },
    {
      word: "Quixotic",
      definition: "Idealistic but impractical.",
      example: "His quixotic plan was bound to fail.",
    },
    {
      word: "Resilient",
      definition: "Able to recover quickly from adversity.",
      example: "She was resilient in the face of tragedy.",
    },
    {
      word: "Sagacious",
      definition: "Wise and insightful.",
      example: "The sagacious old man gave sound advice.",
    },
    {
      word: "Tantamount",
      definition: "Equivalent in seriousness.",
      example: "His silence was tantamount to guilt.",
    },
    {
      word: "Ubiquitous",
      definition: "Present everywhere.",
      example: "Smartphones have become ubiquitous in society.",
    },
    {
      word: "Vicarious",
      definition: "Experienced through another person.",
      example: "She felt vicarious joy from her friend's success.",
    },
    {
      word: "Wistful",
      definition: "Having a sad longing.",
      example: "He gave a wistful glance at his old school.",
    },
    {
      word: "Xenial",
      definition: "Friendly to strangers or guests.",
      example: "The xenial host welcomed everyone warmly.",
    },
    {
      word: "Yen",
      definition: "A strong desire or craving.",
      example: "She had a yen for adventure.",
    },
    {
      word: "Zealous",
      definition: "Filled with intense enthusiasm.",
      example: "He was zealous in defending his beliefs.",
    },
    {
      word: "Avarice",
      definition: "Extreme greed for wealth.",
      example: "His avarice led to his downfall.",
    },
    {
      word: "Brusque",
      definition: "Abrupt in manner.",
      example: "She gave a brusque response to the question.",
    },
    {
      word: "Capricious",
      definition: "Given to sudden changes of mood.",
      example: "The weather was capricious and unpredictable.",
    },
    {
      word: "Debacle",
      definition: "A sudden failure or fiasco.",
      example: "The launch was a complete debacle.",
    },
    {
      word: "Enigma",
      definition: "Something mysterious or puzzling.",
      example: "Her sudden departure was an enigma.",
    },
    {
      word: "Fecund",
      definition: "Fertile or productive.",
      example: "The fecund soil yielded abundant crops.",
    },
    {
      word: "Galvanize",
      definition: "To shock into taking action.",
      example: "The speech galvanized the crowd.",
    },
    {
      word: "Hubris",
      definition: "Excessive pride or self-confidence.",
      example: "His hubris blinded him to danger.",
    },
    {
      word: "Impetuous",
      definition: "Acting quickly without thought.",
      example: "He made an impetuous decision to quit.",
    },
    {
      word: "Jeopardy",
      definition: "Danger of loss or harm.",
      example: "His life was in jeopardy during the climb.",
    },
    {
      word: "Kinetic",
      definition: "Relating to motion.",
      example: "The sculpture used kinetic energy to move.",
    },
    {
      word: "Lethargic",
      definition: "Sluggish and inactive.",
      example: "She felt lethargic after the meal.",
    },
    {
      word: "Maverick",
      definition: "An independent-minded person.",
      example: "He was a maverick in his field.",
    },
    {
      word: "Nefarious",
      definition: "Wicked or criminal.",
      example: "The villain had a nefarious plan.",
    },
    {
      word: "Ominous",
      definition: "Suggesting bad things to come.",
      example: "Dark clouds gave an ominous feeling.",
    },
    {
      word: "Palpable",
      definition: "Able to be touched or felt.",
      example: "The tension in the room was palpable.",
    },
    {
      word: "Quagmire",
      definition: "A difficult or messy situation.",
      example: "He was caught in a political quagmire.",
    },
    {
      word: "Reticent",
      definition: "Not revealing thoughts easily.",
      example: "He was reticent about his past.",
    },
    {
      word: "Sanguine",
      definition: "Optimistic or hopeful.",
      example: "She remained sanguine despite setbacks.",
    },
    {
      word: "Truncate",
      definition: "To shorten something.",
      example: "The article was truncated for space.",
    },
    {
      word: "Unequivocal",
      definition: "Clear and unambiguous.",
      example: "He gave an unequivocal answer.",
    },
    {
      word: "Voracity",
      definition: "The quality of being very hungry or greedy.",
      example: "His voracity for books was unmatched.",
    },
    {
      word: "Wary",
      definition: "Cautious or alert to danger.",
      example: "He was wary of making enemies.",
    },
    {
      word: "Xeric",
      definition: "Characterized by dry conditions.",
      example: "The desert is a xeric environment.",
    },
    {
      word: "Yield",
      definition: "To produce or give way.",
      example: "The farm yields large crops yearly.",
    },
    {
      word: "Zany",
      definition: "Amusingly unconventional or eccentric.",
      example: "He wore a zany hat to the party.",
    },
    {
      word: "Ameliorate",
      definition: "To make something better.",
      example: "The medicine helped ameliorate her pain.",
    },
    {
      word: "Barrage",
      definition: "A rapid outpouring of something.",
      example: "He faced a barrage of questions.",
    },
    {
      word: "Cacophony",
      definition: "A harsh mixture of sounds.",
      example: "The construction created a cacophony.",
    },
    {
      word: "Diligent",
      definition: "Hardworking and persistent.",
      example: "She was diligent in her studies.",
    },
    {
      word: "Esoteric",
      definition: "Intended for a small, knowledgeable group.",
      example: "The topic was too esoteric for general discussion.",
    },
    {
      word: "Frivolous",
      definition: "Not having serious purpose.",
      example: "The lawsuit was dismissed as frivolous.",
    },
    {
      word: "Gullible",
      definition: "Easily deceived.",
      example: "He was too gullible and believed everything.",
    },
    {
      word: "Heinous",
      definition: "Utterly wicked or evil.",
      example: "The crime was truly heinous.",
    },
    {
      word: "Inevitable",
      definition: "Unavoidable.",
      example: "Failure seemed inevitable at that point.",
    },
    {
      word: "Jaded",
      definition: "Tired or bored after having too much.",
      example: "She became jaded from luxury.",
    },
    {
      word: "Kindred",
      definition: "Related or similar in kind.",
      example: "They were kindred spirits.",
    },
    {
      word: "Lucid",
      definition: "Clear and easy to understand.",
      example: "Her explanation was lucid and simple.",
    },
    {
      word: "Malign",
      definition: "To speak badly of someone.",
      example: "He was maligned in the press.",
    },
    {
      word: "Nostalgia",
      definition: "Longing for the past.",
      example: "Old songs filled him with nostalgia.",
    },
    {
      word: "Oblivion",
      definition: "The state of being unaware.",
      example: "He drank himself into oblivion.",
    },
    {
      word: "Paradox",
      definition: "A statement that contradicts itself but may be true.",
      example: "It was a paradox that he loved what he feared.",
    },
    {
      word: "Quintessential",
      definition: "Representing the perfect example of something.",
      example: "She was the quintessential artist.",
    },
    {
      word: "Reverence",
      definition: "Deep respect.",
      example: "They showed reverence to the old traditions.",
    },
    {
      word: "Subtle",
      definition: "Delicate or hard to notice.",
      example: "There was a subtle shift in her tone.",
    },
    {
      word: "Tenacious",
      definition: "Persistent and determined.",
      example: "She had a tenacious grip on her goals.",
    },
    {
      word: "Uncanny",
      definition: "Strangely familiar or mysterious.",
      example: "There was an uncanny resemblance.",
    },
    {
      word: "Vigilant",
      definition: "Watchful for danger or trouble.",
      example: "Security was vigilant all night.",
    },
    {
      word: "Wane",
      definition: "To decrease in size or intensity.",
      example: "Her enthusiasm began to wane.",
    },
    {
      word: "Xenophobia",
      definition: "Fear or hatred of foreigners.",
      example: "His speech was fueled by xenophobia.",
    },
    {
      word: "Yoke",
      definition: "To join together or burden.",
      example: "They were yoked by tradition.",
    },
    {
      word: "Zenith",
      definition: "The highest point or peak.",
      example: "She reached the zenith of her career.",
    },
    {
      word: "Ascetic",
      definition: "Practicing self-discipline and abstention.",
      example: "He lived an ascetic lifestyle.",
    },
    {
      word: "Bombastic",
      definition: "Overblown or pompous in speech.",
      example: "The speech was bombastic and hollow.",
    },
    {
      word: "Copious",
      definition: "Abundant in supply or quantity.",
      example: "She took copious notes.",
    },
    {
      word: "Disparage",
      definition: "To belittle or criticize.",
      example: "He disparaged her efforts.",
    },
    {
      word: "Elated",
      definition: "Very happy or proud.",
      example: "She was elated after winning the race.",
    },
    {
      word: "Fallacy",
      definition: "A mistaken belief.",
      example: "The idea that wealth brings happiness is a fallacy.",
    },
    {
      word: "Gratuitous",
      definition: "Unnecessary or uncalled for.",
      example: "The film included gratuitous violence.",
    },
    {
      word: "Hiatus",
      definition: "A pause or gap in a sequence.",
      example: "The band went on hiatus.",
    },
    {
      word: "Inane",
      definition: "Silly or stupid.",
      example: "They had an inane conversation.",
    },
    {
      word: "Jubilation",
      definition: "A feeling of great happiness.",
      example: "There was jubilation after the victory.",
    },
    {
      word: "Knavery",
      definition: "Dishonest or unscrupulous behavior.",
      example: "He was punished for his knavery.",
    },
    {
      word: "Lurid",
      definition: "Shocking or sensational.",
      example: "The lurid headlines grabbed attention.",
    },
    {
      word: "Morbid",
      definition: "Appealing to an unhealthy interest in disturbing topics.",
      example: "He had a morbid fascination with crime.",
    },
    {
      word: "Nadir",
      definition: "The lowest point.",
      example: "Losing his job was the nadir of his year.",
    },
    {
      word: "Opaque",
      definition: "Not transparent or hard to understand.",
      example: "The instructions were opaque.",
    },
    {
      word: "Pragmatic",
      definition: "Dealing with things sensibly and realistically.",
      example: "She took a pragmatic approach to budgeting.",
    },
    {
      word: "Raucous",
      definition: "Loud and disorderly.",
      example: "The crowd was raucous and excited.",
    },
    {
      word: "Succinct",
      definition: "Brief and clearly expressed.",
      example: "His speech was succinct and powerful.",
    },
  ],
];

app.get("/", function (req, res) {
  res.json("");
});

app.get("/randomwords", (request, response) => {
  response.json(randomwords);
});

const PORT = 8080;

app.listen(PORT, function (req, res) {
  console.log(
    `Server is running running, and running running on Port: ${PORT}`
  );
});
