export interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number; // 1-5 stars
}

export interface Movie {
  id: string;
  title: string;
  category: "Sci-Fi" | "Horror" | "Romance" | "Action" | "Comedy" | "Animation";
  color: string;
  imageUrl: string;
  synopsis: string;
  reviews: Review[];
}

export const MOVIE_DB: Movie[] = [
  // --- HORROR ---
  {
    id: "iron-lung",
    title: "Iron Lung",
    category: "Horror",
    color: "bg-red-950",
    imageUrl: "/Iron_Lung.webp",
    synopsis:
      "Set in a post-apocalyptic future where the Quiet Rapture has caused all stars and habitable planets to vanish, a convict is welded into a rusting submarine to navigate an ocean of blood on a desolate moon.",
    reviews: [
      {
        id: "r1",
        user: "MarkiplierFan",
        comment: "The claustrophobia is real. 10/10.",
        rating: 5,
      },
      {
        id: "r2",
        user: "CriticX",
        comment: "Too much blood, too adventure, too much fun watching.",
        rating: 5,
      },
      {
        id: "r3",
        user: "OceanFear",
        comment: "I will never go swimming again.",
        rating: 5,
      },
    ],
  },
  {
    id: "h-alien",
    title: "Alien",
    category: "Horror",
    color: "bg-gray-900",
    imageUrl: "/Alien.webp",
    synopsis:
      "The crew of the commercial starship Nostromo encounters a deadly lifeform after investigating a distress call on an unknown planet.",
    reviews: [
      {
        id: "r1",
        user: "RipleyRulez",
        comment: "The perfect organism. The perfect movie.",
        rating: 5,
      },
      {
        id: "r2",
        user: "SpaceTrucker",
        comment: "A bit slow at the start, but the end is intense.",
        rating: 4,
      },
      { id: "r3", user: "Jonesy", comment: "Meow.", rating: 5 },
    ],
  },
  {
    id: "h-hereditary",
    title: "Hereditary",
    category: "Horror",
    color: "bg-yellow-900",
    imageUrl: "/Hereditary.jpg",
    synopsis:
      "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begins to unravel dark secrets.",
    reviews: [
      {
        id: "r1",
        user: "ScaredStiff",
        comment: "I slept with the lights on for a week.",
        rating: 5,
      },
      {
        id: "r2",
        user: "CinemaBuff",
        comment: "Toni Collette was robbed of an Oscar.",
        rating: 5,
      },
      {
        id: "r3",
        user: "CasualViewer",
        comment: "Too weird for me.",
        rating: 2,
      },
    ],
  },
  {
    id: "h-shining",
    title: "The Shining",
    category: "Horror",
    color: "bg-yellow-600",
    imageUrl: "/The_Shining.jpg",
    synopsis:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings.",
    reviews: [
      {
        id: "r1",
        user: "RedRum",
        comment: "Masterpiece of tension.",
        rating: 5,
      },
      {
        id: "r2",
        user: "KingFan",
        comment: "Book was better, but movie is iconic.",
        rating: 4,
      },
      {
        id: "r3",
        user: "HotelGuest",
        comment: "Service was terrible. Ghosts everywhere.",
        rating: 1,
      },
    ],
  },

  // --- SCI-FI ---
  {
    id: "sf-dune",
    title: "Dune: Part Two",
    category: "Sci-Fi",
    color: "bg-amber-700",
    imageUrl: "/Dune_Part_Two.webp",
    synopsis:
      "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    reviews: [
      {
        id: "r1",
        user: "SpiceLover",
        comment: "Visual spectacle of the decade.",
        rating: 5,
      },
      { id: "r2", user: "SandWorm", comment: "Needs more worms.", rating: 4 },
      {
        id: "r3",
        user: "SciFiNut",
        comment: "Hans Zimmer score is legendary.",
        rating: 5,
      },
    ],
  },
  {
    id: "sf-interstellar",
    title: "Interstellar",
    category: "Sci-Fi",
    color: "bg-slate-900",
    imageUrl: "/Interstellar.jpg",
    synopsis:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    reviews: [
      {
        id: "r1",
        user: "PhysicsNerd",
        comment: "The black hole visualization is accurate!",
        rating: 5,
      },
      {
        id: "r2",
        user: "CryingDad",
        comment: "Don't let me leave Murph!",
        rating: 5,
      },
      {
        id: "r3",
        user: "Confused",
        comment: "Did not understand the ending.",
        rating: 3,
      },
    ],
  },
  {
    id: "sf-blade",
    title: "Blade Runner 2049",
    category: "Sci-Fi",
    color: "bg-orange-800",
    imageUrl: "/Blade_Runner_2049.webp",
    synopsis:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    reviews: [
      {
        id: "r1",
        user: "NeonDreams",
        comment: "Every frame is a painting.",
        rating: 5,
      },
      { id: "r2", user: "Replicant", comment: "Am I real?", rating: 4 },
      { id: "r3", user: "BoredGuy", comment: "Too long and slow.", rating: 2 },
    ],
  },
  {
    id: "sf-matrix",
    title: "The Matrix",
    category: "Sci-Fi",
    color: "bg-green-900",
    imageUrl: "/The_Matrix_1999.jpg",
    synopsis:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    reviews: [
      {
        id: "r1",
        user: "TheOne",
        comment: "Changed action movies forever.",
        rating: 5,
      },
      { id: "r2", user: "RedPill", comment: "Whoa.", rating: 5 },
      { id: "r3", user: "AgentSmith", comment: "Mr. Anderson...", rating: 4 },
    ],
  },

  // --- ROMANCE ---
  {
    id: "r-notebook",
    title: "The Notebook",
    category: "Romance",
    color: "bg-blue-800",
    imageUrl: "/The_Notebook.jpg",
    synopsis:
      "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
    reviews: [
      {
        id: "r1",
        user: "Romantic101",
        comment: "If you are a bird, I am a bird.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Cynic",
        comment: "Unrealistic expectations of love.",
        rating: 2,
      },
      { id: "r3", user: "GoslingFan", comment: "Ryan is perfect.", rating: 5 },
    ],
  },
  {
    id: "r-lala",
    title: "La La Land",
    category: "Romance",
    color: "bg-indigo-900",
    imageUrl: "/La_La_Land.webp",
    synopsis:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    reviews: [
      { id: "r1", user: "JazzLover", comment: "City of stars...", rating: 5 },
      {
        id: "r2",
        user: "Hater",
        comment: "They should have stayed together.",
        rating: 3,
      },
      {
        id: "r3",
        user: "Dancer",
        comment: "Opening scene was magic.",
        rating: 5,
      },
    ],
  },
  {
    id: "r-pride",
    title: "Pride & Prejudice",
    category: "Romance",
    color: "bg-emerald-800",
    imageUrl: "/Pride_Prejudice.jpg",
    synopsis:
      "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
    reviews: [
      {
        id: "r1",
        user: "BookWorm",
        comment: "The hand flex scene. That is all.",
        rating: 5,
      },
      { id: "r2", user: "MrDarcy", comment: "Most ardently.", rating: 5 },
      {
        id: "r3",
        user: "ModernGuy",
        comment: "Why dont they just text?",
        rating: 2,
      },
    ],
  },
  {
    id: "r-eternal",
    title: "Eternal Sunshine",
    category: "Romance",
    color: "bg-cyan-900",
    imageUrl: "/Eternal_Sunshine.jpg",
    synopsis:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    reviews: [
      {
        id: "r1",
        user: "SadBoi",
        comment: "Depressing but beautiful.",
        rating: 5,
      },
      {
        id: "r2",
        user: "PsychStudent",
        comment: "Interesting take on memory.",
        rating: 4,
      },
      { id: "r3", user: "RomanceFan", comment: "Too confusing.", rating: 3 },
    ],
  },

  // --- ACTION ---
  {
    id: "a-madmax",
    title: "Mad Max: Fury Road",
    category: "Action",
    color: "bg-orange-600",
    imageUrl: "/Mad_Max_Fury_Road.webp",
    synopsis:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    reviews: [
      {
        id: "r1",
        user: "AdrenalineJunkie",
        comment: "SHINY AND CHROME!",
        rating: 5,
      },
      {
        id: "r2",
        user: "CarGuy",
        comment: "The practical effects are insane.",
        rating: 5,
      },
      {
        id: "r3",
        user: "DialogueFan",
        comment: "Not enough talking.",
        rating: 3,
      },
    ],
  },
  {
    id: "a-johnwick",
    title: "John Wick: Chapter 4",
    category: "Action",
    color: "bg-purple-900",
    imageUrl: "/John_Wick_Chapter_4.webp",
    synopsis:
      "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
    reviews: [
      {
        id: "r1",
        user: "DogLover",
        comment: "He did it for the puppy.",
        rating: 5,
      },
      {
        id: "r2",
        user: "ActionFan",
        comment: "Stair scene went on forever.",
        rating: 4,
      },
      { id: "r3", user: "PeacefulGuy", comment: "Too violent.", rating: 2 },
    ],
  },
  {
    id: "a-darkknight",
    title: "The Dark Knight",
    category: "Action",
    color: "bg-gray-800",
    imageUrl: "/The_Dark_Knight.jpg",
    synopsis:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    reviews: [
      { id: "r1", user: "JokerFan", comment: "Why so serious?", rating: 5 },
      {
        id: "r2",
        user: "BatFan",
        comment: "Best superhero movie ever.",
        rating: 5,
      },
      {
        id: "r3",
        user: "MarvelFan",
        comment: "Too dark, needs more jokes.",
        rating: 3,
      },
    ],
  },
  {
    id: "a-gladiator",
    title: "Gladiator",
    category: "Action",
    color: "bg-yellow-800",
    imageUrl: "/Gladiator.jpg",
    synopsis:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    reviews: [
      {
        id: "r1",
        user: "RomeFan",
        comment: "Are you not entertained?",
        rating: 5,
      },
      {
        id: "r2",
        user: "HistoryBuff",
        comment: "Historically inaccurate but fun.",
        rating: 4,
      },
      {
        id: "r3",
        user: "CryingMan",
        comment: "The ending broke me.",
        rating: 5,
      },
    ],
  },
  {
    id: "h-thing",
    title: "The Thing",
    category: "Horror",
    color: "bg-blue-950",
    imageUrl: "/The_Thing.jpg",
    synopsis:
      "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
    reviews: [
      { id: "r1", user: "ParanoiaAgent", comment: "Trust no one.", rating: 5 },
      {
        id: "r2",
        user: "FXLover",
        comment: "Practical effects hold up perfectly.",
        rating: 5,
      },
      { id: "r3", user: "DogLover", comment: "Poor dog.", rating: 3 },
    ],
  },
  {
    id: "h-getout",
    title: "Get Out",
    category: "Horror",
    color: "bg-gray-800",
    imageUrl: "/Get_Out.jpg",
    synopsis:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    reviews: [
      { id: "r1", user: "PeeleFan", comment: "Modern classic.", rating: 5 },
      {
        id: "r2",
        user: "TwistLover",
        comment: "Did not see that coming.",
        rating: 4,
      },
      {
        id: "r3",
        user: "TeaDrinker",
        comment: "The tea cup sound still haunts me.",
        rating: 5,
      },
    ],
  },
  {
    id: "h-witch",
    title: "The Witch",
    category: "Horror",
    color: "bg-stone-800",
    imageUrl: "/The_Witch.webp",
    synopsis:
      "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
    reviews: [
      {
        id: "r1",
        user: "HistoryBuff",
        comment: "The dialogue is authentic period English.",
        rating: 4,
      },
      {
        id: "r2",
        user: "GoatFan",
        comment: "Wouldst thou like the taste of butter?",
        rating: 5,
      },
      { id: "r3", user: "SlowBurn", comment: "Too slow for me.", rating: 2 },
    ],
  },
  {
    id: "h-quiet",
    title: "A Quiet Place",
    category: "Horror",
    color: "bg-neutral-900",
    imageUrl: "/A_Quiet_Place.jpg",
    synopsis:
      "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    reviews: [
      {
        id: "r1",
        user: "SilentType",
        comment: "I was afraid to eat my popcorn.",
        rating: 5,
      },
      { id: "r2", user: "JimHalpert", comment: "Great direction.", rating: 4 },
      {
        id: "r3",
        user: "LogicPolice",
        comment: "Why live near a waterfall if you need silence?",
        rating: 3,
      },
    ],
  },

  // --- ADDITIONAL SCI-FI ---
  {
    id: "sf-inception",
    title: "Inception",
    category: "Sci-Fi",
    color: "bg-slate-800",
    imageUrl: "/Inception.jpg",
    synopsis:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    reviews: [
      {
        id: "r1",
        user: "Dreamer",
        comment: "I need a totem to know if this movie is real.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Nolanite",
        comment: "Complex but rewarding.",
        rating: 5,
      },
      {
        id: "r3",
        user: "Sleepy",
        comment: "Fell asleep during the snow level.",
        rating: 3,
      },
    ],
  },
  {
    id: "sf-arrival",
    title: "Arrival",
    category: "Sci-Fi",
    color: "bg-gray-700",
    imageUrl: "/Arrival.jpg",
    synopsis:
      "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    reviews: [
      {
        id: "r1",
        user: "LanguageNerd",
        comment: "Finally a realistic take on first contact.",
        rating: 5,
      },
      { id: "r2", user: "Emotional", comment: "Prepare to cry.", rating: 5 },
      {
        id: "r3",
        user: "ActionFan",
        comment: "Boring, just people talking to squids.",
        rating: 2,
      },
    ],
  },
  {
    id: "sf-exmachina",
    title: "Ex Machina",
    category: "Sci-Fi",
    color: "bg-emerald-950",
    imageUrl: "/Ex_Machina.jpg",
    synopsis:
      "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    reviews: [
      {
        id: "r1",
        user: "TechBro",
        comment: "Terrifyingly plausible.",
        rating: 5,
      },
      {
        id: "r2",
        user: "DanceFan",
        comment: "Best dance scene in cinema history.",
        rating: 4,
      },
      {
        id: "r3",
        user: "RobotRights",
        comment: "Ava did nothing wrong.",
        rating: 5,
      },
    ],
  },
  {
    id: "sf-martian",
    title: "The Martian",
    category: "Sci-Fi",
    color: "bg-orange-700",
    imageUrl: "/The_Martian.jpeg",
    synopsis:
      "An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
    reviews: [
      {
        id: "r1",
        user: "Botanist",
        comment: "Science the sh*t out of it.",
        rating: 5,
      },
      {
        id: "r2",
        user: "SpaceNerd",
        comment: "Book was more technical but movie is fun.",
        rating: 4,
      },
      {
        id: "r3",
        user: "DiscoHater",
        comment: "Too much disco music.",
        rating: 3,
      },
    ],
  },

  // --- ADDITIONAL ROMANCE ---
  {
    id: "r-titanic",
    title: "Titanic",
    category: "Romance",
    color: "bg-cyan-950",
    imageUrl: "/Titanic.webp",
    synopsis:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    reviews: [
      {
        id: "r1",
        user: "DoorExpert",
        comment: "There was room for both of them.",
        rating: 4,
      },
      { id: "r2", user: "LeoFan", comment: "King of the world!", rating: 5 },
      { id: "r3", user: "BoatHater", comment: "Too long.", rating: 3 },
    ],
  },
  {
    id: "r-princess",
    title: "The Princess Bride",
    category: "Romance",
    color: "bg-yellow-700",
    imageUrl: "/The_Princess_Bride.jpg",
    synopsis:
      "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
    reviews: [
      { id: "r1", user: "Inigo", comment: "As you wish.", rating: 5 },
      { id: "r2", user: "Giant", comment: "Anybody want a peanut?", rating: 5 },
      { id: "r3", user: "SeriousCritic", comment: "A bit campy.", rating: 4 },
    ],
  },
  {
    id: "r-amalie",
    title: "Amélie",
    category: "Romance",
    color: "bg-green-700",
    imageUrl: "/Amélie.jpg",
    synopsis:
      "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
    reviews: [
      {
        id: "r1",
        user: "Francophile",
        comment: "Whimsical and beautiful.",
        rating: 5,
      },
      {
        id: "r2",
        user: "MusicLover",
        comment: "The soundtrack is iconic.",
        rating: 5,
      },
      { id: "r3", user: "Grump", comment: "Too sweet.", rating: 3 },
    ],
  },
  {
    id: "r-fault",
    title: "The Fault in Our Stars",
    category: "Romance",
    color: "bg-sky-600",
    imageUrl: "/The_Fault_in_Our_Stars.jpg",
    synopsis:
      "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
    reviews: [
      { id: "r1", user: "TearDucts", comment: "Okay? Okay.", rating: 5 },
      {
        id: "r2",
        user: "BookReader",
        comment: "Faithful adaptation.",
        rating: 4,
      },
      {
        id: "r3",
        user: "Cynic",
        comment: "Manipulative tear-jerker.",
        rating: 2,
      },
    ],
  },

  // --- ADDITIONAL ACTION ---
  {
    id: "a-diehard",
    title: "Die Hard",
    category: "Action",
    color: "bg-slate-700",
    imageUrl: "/Die_Hard.jpeg",
    synopsis:
      "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    reviews: [
      {
        id: "r1",
        user: "XmasFan",
        comment: "Best Christmas movie ever.",
        rating: 5,
      },
      { id: "r2", user: "McClane", comment: "Yippee-ki-yay.", rating: 5 },
      { id: "r3", user: "GlassFeet", comment: "Ouch.", rating: 4 },
    ],
  },
  {
    id: "a-terminator2",
    title: "Terminator 2",
    category: "Action",
    color: "bg-zinc-800",
    imageUrl: "/Terminator_2.jpg",
    synopsis:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    reviews: [
      {
        id: "r1",
        user: "LiquidMetal",
        comment: "Best sequel of all time.",
        rating: 5,
      },
      {
        id: "r2",
        user: "ActionHero",
        comment: "Hasta la vista, baby.",
        rating: 5,
      },
      {
        id: "r3",
        user: "TimeTraveler",
        comment: "Paradoxes give me a headache.",
        rating: 4,
      },
    ],
  },
  {
    id: "a-topgun",
    title: "Top Gun: Maverick",
    category: "Action",
    color: "bg-orange-500",
    imageUrl: "/Top_Gun_Maverick.jpg",
    synopsis:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice.",
    reviews: [
      {
        id: "r1",
        user: "Pilot",
        comment: "Real jets makes a huge difference.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Nostalgia",
        comment: "Better than the original.",
        rating: 5,
      },
      {
        id: "r3",
        user: "Physics",
        comment: "Some maneuvers are impossible.",
        rating: 3,
      },
    ],
  },
  {
    id: "a-bourne",
    title: "The Bourne Identity",
    category: "Action",
    color: "bg-teal-900",
    imageUrl: "/The_Bourne_Identity.jpg",
    synopsis:
      "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and attempting to regain his memory.",
    reviews: [
      {
        id: "r1",
        user: "SpyFan",
        comment: "Changed spy movies forever. No gadgets, just skills.",
        rating: 5,
      },
      {
        id: "r2",
        user: "ShakyCam",
        comment: "Camera work is intense.",
        rating: 4,
      },
      { id: "r3", user: "BondFan", comment: "Prefer 007.", rating: 3 },
    ],
  },
  {
    id: "c-superbad",
    title: "Superbad",
    category: "Comedy",
    color: "bg-red-700",
    imageUrl: "/Superbad.jpg",
    synopsis:
      "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
    reviews: [
      { id: "r1", user: "McLovin", comment: "I am McLovin.", rating: 5 },
      {
        id: "r2",
        user: "Cop1",
        comment: "Classic high school movie.",
        rating: 4,
      },
      { id: "r3", user: "Parent", comment: "Very inappropriate.", rating: 2 },
    ],
  },
  {
    id: "c-montypython",
    title: "Monty Python and the Holy Grail",
    category: "Comedy",
    color: "bg-yellow-600",
    imageUrl: "/Monty_Python_and_the_Holy_Grail.jpg",
    synopsis:
      "King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles.",
    reviews: [
      {
        id: "r1",
        user: "BlackKnight",
        comment: "Tis but a scratch.",
        rating: 5,
      },
      { id: "r2", user: "Tim", comment: "The rabbit is dynamite!", rating: 5 },
      {
        id: "r3",
        user: "Historian",
        comment: "Not accurate to the legend.",
        rating: 3,
      },
    ],
  },
  {
    id: "c-budapest",
    title: "The Grand Budapest Hotel",
    category: "Comedy",
    color: "bg-pink-800",
    imageUrl: "/The_Grand_Budapest_Hotel.jpeg",
    synopsis:
      "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    reviews: [
      {
        id: "r1",
        user: "WesAndersonFan",
        comment: "The symmetry is satisfying.",
        rating: 5,
      },
      {
        id: "r2",
        user: "RalphFan",
        comment: "Fiennes is hilarious.",
        rating: 5,
      },
      { id: "r3", user: "ColorBlind", comment: "Too much pink.", rating: 4 },
    ],
  },
  {
    id: "c-meangirls",
    title: "Mean Girls",
    category: "Comedy",
    color: "bg-fuchsia-600",
    imageUrl: "/Mean_Girls.jpg",
    synopsis:
      "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
    reviews: [
      {
        id: "r1",
        user: "Regina",
        comment: "Get in loser, we are going shopping.",
        rating: 5,
      },
      {
        id: "r2",
        user: "MathNerd",
        comment: "The limit does not exist.",
        rating: 5,
      },
      {
        id: "r3",
        user: "GlenCoco",
        comment: "Four for you Glen Coco!",
        rating: 4,
      },
    ],
  },
  {
    id: "c-ferris",
    title: "Ferris Bueller's Day Off",
    category: "Comedy",
    color: "bg-red-800",
    imageUrl: "/Ferris_Buellers_Day_Off.jpg",
    synopsis:
      "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.",
    reviews: [
      {
        id: "r1",
        user: "Slacker",
        comment: "Life moves pretty fast.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Cameron",
        comment: "My father is going to kill me.",
        rating: 4,
      },
      {
        id: "r3",
        user: "PrincipalRooney",
        comment: "I will catch him.",
        rating: 1,
      },
    ],
  },
  {
    id: "c-stepbrothers",
    title: "Step Brothers",
    category: "Comedy",
    color: "bg-blue-600",
    imageUrl: "/Step_Brothers.jpeg",
    synopsis:
      "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
    reviews: [
      {
        id: "r1",
        user: "PrestigeWorldwide",
        comment: "Did we just become best friends?",
        rating: 5,
      },
      {
        id: "r2",
        user: "Drummer",
        comment: "Don't touch my drum set.",
        rating: 5,
      },
      { id: "r3", user: "BoatGuy", comment: "Boats and Hoes.", rating: 4 },
    ],
  },
  {
    id: "c-dumb",
    title: "Dumb and Dumber",
    category: "Comedy",
    color: "bg-orange-400",
    imageUrl: "/Dumb_and_Dumber.jpg",
    synopsis:
      "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it.",
    reviews: [
      {
        id: "r1",
        user: "Lloyd",
        comment: "So you're telling me there's a chance.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Harry",
        comment: "Just when I thought you couldn't get any dumber...",
        rating: 5,
      },
      { id: "r3", user: "Petey", comment: "Pretty bird.", rating: 4 },
    ],
  },
  {
    id: "c-bridesmaids",
    title: "Bridesmaids",
    category: "Comedy",
    color: "bg-pink-600",
    imageUrl: "/Bridesmaids.jpg",
    synopsis:
      "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
    reviews: [
      {
        id: "r1",
        user: "AirplaneMarshal",
        comment: "I am ready to party.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Foodie",
        comment: "Don't eat the brazilian food.",
        rating: 4,
      },
      { id: "r3", user: "Wilson", comment: "Hold on Wilson!", rating: 5 },
    ],
  },

  // --- NEW CATEGORY: ANIMATION (8 Movies) ---
  {
    id: "an-spirited",
    title: "Spirited Away",
    category: "Animation",
    color: "bg-red-900",
    imageUrl: "/Spirited_Away.jpg",
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    reviews: [
      {
        id: "r1",
        user: "GhibliFan",
        comment: "Beautiful animation.",
        rating: 5,
      },
      { id: "r2", user: "NoFace", comment: "...", rating: 5 },
      { id: "r3", user: "Haku", comment: "Don't forget your name.", rating: 5 },
    ],
  },
  {
    id: "an-lionking",
    title: "The Lion King",
    category: "Animation",
    color: "bg-yellow-700",
    imageUrl: "/The_Lion_King.jpg",
    synopsis:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    reviews: [
      {
        id: "r1",
        user: "Simba",
        comment: "I just can't wait to be king.",
        rating: 5,
      },
      { id: "r2", user: "Timon", comment: "Hakuna Matata.", rating: 5 },
      {
        id: "r3",
        user: "Scar",
        comment: "I'm surrounded by idiots.",
        rating: 4,
      },
    ],
  },
  {
    id: "an-spiderverse",
    title: "Spider-Man: Into the Spider-Verse",
    category: "Animation",
    color: "bg-red-600",
    imageUrl: "/Spider-Man_Into_the_Spider-Verse.jpg",
    synopsis:
      "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    reviews: [
      {
        id: "r1",
        user: "ComicFan",
        comment: "Looks exactly like a comic book.",
        rating: 5,
      },
      {
        id: "r2",
        user: "Miles",
        comment: "Anyone can wear the mask.",
        rating: 5,
      },
      {
        id: "r3",
        user: "Noir",
        comment: "I like to drink egg creams.",
        rating: 4,
      },
    ],
  },
  {
    id: "an-toystory",
    title: "Toy Story",
    category: "Animation",
    color: "bg-blue-500",
    imageUrl: "/Toy_Story.jpg",
    synopsis:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    reviews: [
      { id: "r1", user: "Woody", comment: "You are a toy!", rating: 5 },
      { id: "r2", user: "Buzz", comment: "To infinity and beyond.", rating: 5 },
      {
        id: "r3",
        user: "Sid",
        comment: "I like to blow things up.",
        rating: 1,
      },
    ],
  },
  {
    id: "an-shrek",
    title: "Shrek",
    category: "Animation",
    color: "bg-green-600",
    imageUrl: "/Shrek.jpg",
    synopsis:
      "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
    reviews: [
      {
        id: "r1",
        user: "Donkey",
        comment: "I like that boulder. That is a nice boulder.",
        rating: 5,
      },
      {
        id: "r2",
        user: "SmashMouth",
        comment: "Hey now, you're an all star.",
        rating: 5,
      },
      { id: "r3", user: "Farquaad", comment: "Ew, ogres.", rating: 1 },
    ],
  },
  {
    id: "an-akira",
    title: "Akira",
    category: "Animation",
    color: "bg-red-700",
    imageUrl: "/Akira.jpg",
    synopsis:
      "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by his childhood friend.",
    reviews: [
      { id: "r1", user: "Tetsuo", comment: "KANEDAAAA!", rating: 5 },
      { id: "r2", user: "Kaneda", comment: "TETSUOOOO!", rating: 5 },
      {
        id: "r3",
        user: "Cyberpunk",
        comment: "The bike slide is iconic.",
        rating: 5,
      },
    ],
  },
  {
    id: "an-incredibles",
    title: "The Incredibles",
    category: "Animation",
    color: "bg-red-600",
    imageUrl: "/The_Incredibles.jpg",
    synopsis:
      "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
    reviews: [
      {
        id: "r1",
        user: "Frozone",
        comment: "Where is my super suit?",
        rating: 5,
      },
      { id: "r2", user: "Edna", comment: "No capes!", rating: 5 },
      {
        id: "r3",
        user: "Syndrome",
        comment: "When everyone is super, no one will be.",
        rating: 5,
      },
    ],
  },
  {
    id: "an-yourname",
    title: "Your Name",
    category: "Animation",
    color: "bg-indigo-700",
    imageUrl: "/Your_Name.jpg",
    synopsis:
      "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    reviews: [
      { id: "r1", user: "Taki", comment: "Who are you?", rating: 5 },
      {
        id: "r2",
        user: "Mitsuha",
        comment:
          "I wanted to tell you that wherever you may end up in this world, I will be searching for you.",
        rating: 5,
      },
      { id: "r3", user: "AnimeFan", comment: "Visual masterpiece.", rating: 5 },
    ],
  },
];
