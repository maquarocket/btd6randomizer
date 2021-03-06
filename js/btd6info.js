const btd6_version = "27.1.4229"
const randomizer_version = "1.0.1"

let btd6_maps = [
    "Monkey Meadow (Beginner)",
    "Tree Stump (Beginner)",
    "Town Center (Beginner)",
    "Resort (Beginner)",
    "Skates (Beginner)",
    "Lotus Island (Beginner)",
    "Candy Falls (Beginner)",
    "Winter Park (Beginner)",
    "Carved (Beginner)",
    "Park Path (Beginner)",
    "Alpine Run (Beginner)",
    "Frozen Over (Beginner)",
    "In the Loop (Beginner)",
    "Cubism (Beginner)",
    "Four Circles (Beginner)",
    "Hedge (Beginner)",
    "End of the Road (Beginner)",
    "Logs (Beginner)",
    "Bloonarius Prime (Intermediate)",
    "Balance (Intermediate)",
    "Encrypted (Intermediate)",
    "Bazaar (Intermediate)",
    "Adora's Temple (Intermediate)",
    "Spring Spring (Intermediate)",
    "Kartsndarts (Intermediate)",
    "Moon Landing (Intermediate)",
    "Haunted (Intermediate)",
    "Downstream (Intermediate)",
    "Firing Range (Intermediate)",
    "Cracked (Intermediate)",
    "Streambed (Intermediate)",
    "Chutes (Intermediate)",
    "Rake (Intermediate)",
    "Spice Islands (Intermediate)",
    "X Factor (Advanced)",
    "Mesa (Advanced)",
    "Geared (Advanced)",
    "Spillway (Advanced)",
    "Cargo (Advanced)",
    "Pat's Pond (Advanced)",   
    "Peninsula (Advanced)",
    "High Finance (Advanced)",
    "Another Brick (Advanced)",
    "Off the Coast (Advanced)",
    "Cornfield (Advanced)",
    "Underground (Advanced)",
    "Sanctuary (Expert)",
    "Ravine (Expert)",
    "Flooded Valley (Expert)",
    "Infernal (Expert)",
    "Bloody Puddles (Expert)",
    "Workshop (Expert)",
    "Quad (Expert)",
    "Dark Castle (Expert)",
    "Muddy Puddles (Expert)",
    "#Ouch (Expert)",
];

let btd6_heroes = [
    "Quincy",
    "Gwendolin",
    "Striker Jones",
    "Obyn Greenfoot",
    "Captain Churchill",
    "Benjamin",
    "Ezili",
    "Pat Fusty",
    "Adora",
    "Admiral Brickell",
    "Etienne",
    "Sauda",
    "Psi",
];

let btd6_modes = [
    "Standard Easy",
    "Primary Monkeys Only (Easy)",
    "Deflation (Easy)",
    "Standard Medium",
    "Military Monkeys Only (Medium)",
    "Apopalypse (Medium)",
    "Reverse (Medium)",
    "Standard Hard",
    "Magic Monkeys Only (Hard)",
    "Double HP MOABs (Hard)",
    "Half Cash (Hard)",
    "Alternate Bloon Rounds (Hard)",
    "Impoppable (Hard)",
    "CHIMPS (Hard)",
];

//Indices of modes to blacklist when randomizing towers in btd6_modes
let btd6_only_modes = [
    1,4,8
]

let btd6_towers = {
    primary:["Dart Monkey","Boomerang Monkey","Bomb Shooter","Tack Shooter","Ice Monkey","Glue Gunner"],
    military:["Sniper Monkey","Monkey Sub","Monkey Buccaneer","Monkey Ace","Heli Pilot","Mortar Monkey","Dartling Gunner"],
    magic:["Wizard Monkey", "Super Monkey","Ninja Monkey","Alchemist","Druid"],
    support:["Banana Farm","Spike Factory","Monkey Village","Engineer Monkey"]
};
