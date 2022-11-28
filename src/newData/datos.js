let pokemons = [
  {
    nombre: "Bulbasour",
    id: "001",
    img: "/img/Bulbasour.png",
    type: ["Grass", "Poisson"],
    weight: "6,9 kg",
    height: "0,7 m",
    description:
      "There is a plant seed on its back right from day this pokemon is born.The seeed sloowly grows larger.",
    moves: ["Chlorophyll", "Overgrow"],
    stats: [
      {
        skills: "HP",
        Quantity: 45,
        fullmark: 100,
      },
      {
        skills: "ATK",
        Quantity: 49,
        fullmark: 100,
      },
      {
        skills: "DEF",
        Quantity: 49,
        fullmark: 100,
      },
      {
        skills: "SATK",
        Quantity: 65,
        fullmark: 100,
      },
      {
        skills: "SDEF",
        Quantity: 65,
        fullmark: 100,
      },
      {
        skills: "SPD",
        Quantity: 40,
        fullmark: 100,
      },
    ],
    HP: "045",
    ATK: "049",
    DEF: "049",
    SATK: "065",
    SDEF: "065",
    SPD: "040",
    color: "rgb(130, 208, 89)",
  },
  {
    nombre: "Charmander",
    id: "004",
    img: "/img/Charmander.png",
    type: ["Fire"],
    weight: "8,5 kg",
    height: "0,6 m",
    moves: ["Mega-Punch", "Fire-Punch"],
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    stats: [
      {
        skills: "HP",
        Quantity: 39,
        fullmark: 100,
      },
      {
        skills: "ATK",
        Quantity: 52,
        fullmark: 100,
      },
      {
        skills: "DEF",
        Quantity: 43,
        fullmark: 100,
      },
      {
        skills: "SATK",
        Quantity: 60,
        fullmark: 100,
      },
      {
        skills: "SDEF",
        Quantity: 50,
        fullmark: 100,
      },
      {
        skills: "SPD",
        Quantity: 65,
        fullmark: 100,
      },
    ],
    HP: "039",
    ATK: "052",
    DEF: "043",
    SATK: "060",
    SDEF: "050",
    SPD: "065",
    color: "rgb(245, 125, 49)",
  },
  {
    nombre: "Squirtle",
    id: "007",
    img: "/img/Squirtle.png",
    type: ["Water"],
    weight: "9,0 kg",
    height: "0,5 m",
    moves: ["Torrent", "Rain-Dish"],
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    stats: [
      {
        skills: "HP",
        Quantity: 44,
        fullmark: 100,
      },
      {
        skills: "ATK",
        Quantity: 48,
        fullmark: 100,
      },
      {
        skills: "DEF",
        Quantity: 65,
        fullmark: 100,
      },
      {
        skills: "SATK",
        Quantity: 50,
        fullmark: 100,
      },
      {
        skills: "SDEF",
        Quantity: 64,
        fullmark: 100,
      },
      {
        skills: "SPD",
        Quantity: 43,
        fullmark: 100,
      },
    ],
    HP: "044",
    ATK: "048",
    DEF: "065",
    SATK: "050",
    SDEF: "064",
    SPD: "043",
    color: "rgb(100, 147, 235)",
  },
  {
    nombre: "Butterfree",
    id: "012",
    img: "/img/Butterfree.png",
    type: ["Bug", "Flying"],
    weight: "32,0 kg",
    height: "1,1 m",
    moves: ["Compound-Eyes", "Tristed-Lens"],
    description:
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    color: "rgb(167, 183, 35)",
    stats: [
      {
        skills: "HP",
        Quantity: 60,
        fullmark: 100,
      },
      {
        skills: "ATK",
        Quantity: 45,
        fullmark: 100,
      },
      {
        skills: "DEF",
        Quantity: 50,
        fullmark: 100,
      },
      {
        skills: "SATK",
        Quantity: 90,
        fullmark: 100,
      },
      {
        skills: "SDEF",
        Quantity: 80,
        fullmark: 100,
      },
      {
        skills: "SPD",
        Quantity: 70,
        fullmark: 100,
      },
    ],
  },
  {
    nombre: "Pikachu",
    id: "025",
    img: "/img/Picachu.png",
    type: ["Electric"],
    weight: "5,0 kg",
    height: "0,4 m",
    moves: ["Mega-Punch", "Pay-Day"],
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    stats: [
      {
        skills: "HP",
        Quantity: 35,
        fullmark: 100,
      },
      {
        skills: "ATK",
        Quantity: 55,
        fullmark: 100,
      },
      {
        skills: "DEF",
        Quantity: 40,
        fullmark: 100,
      },
      {
        skills: "SATK",
        Quantity: 50,
        fullmark: 100,
      },
      {
        skills: "SDEF",
        Quantity: 50,
        fullmark: 100,
      },
      {
        skills: "SPD",
        Quantity: 50,
        fullmark: 100,
      },
    ],
    HP: "035",
    ATK: "055",
    DEF: "040",
    SATK: "050",
    SDEF: "050",
    SPD: "050",
    color: "rgb(249, 207, 47)",
  },
  {
    nombre: "Gastly",
    id: "093",
    img: "/img/Gostly.png",
    type: ["Ghost"],
    weight: "0,1 kg",
    height: "1,3 m",
    description:
      "Born from gases,anyone would be faint if engulfed by its gaseous body, which contains poison.",
    moves: ["Levitate"],
    stats: [
      {
        skills: "HP",
        Quantity: 30,
        fullmark: 100,
      },
      {
        skills: "ATK",
        Quantity: 35,
        fullmark: 100,
      },
      {
        skills: "DEF",
        Quantity: 30,
        fullmark: 100,
      },
      {
        skills: "SATK",
        Quantity: 100,
        fullmark: 100,
      },
      {
        skills: "SDEF",
        Quantity: 35,
        fullmark: 100,
      },
      {
        skills: "SPD",
        Quantity: 80,
        fullmark: 100,
      },
    ],
    color: "rgb(112, 85, 154)",
  },
  {
    nombre: "Ditto",
    id: "132",
    img: "/img/Ditto.png",
    type: ["Normal"],
    weight: "4,0 kg",
    height: "0,3 m",
    moves: ["Limber", "Imposter"],
    description:
      "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
    stats: [
      {
        skills: "HP",
        Quantity: 48,
        fullmark: 110,
      },
      {
        skills: "ATK",
        Quantity: 48,
        fullmark: 110,
      },
      {
        skills: "DEF",
        Quantity: 48,
        fullmark: 110,
      },
      {
        skills: "SATK",
        Quantity: 48,
        fullmark: 110,
      },
      {
        skills: "SDEF",
        Quantity: 48,
        fullmark: 110,
      },
      {
        skills: "SPD",
        Quantity: 48,
        fullmark: 110,
      },
    ],
    color: "rgb(170, 166, 128)",
  },
  {
    nombre: "Mew",
    id: "162",
    img: "/img/Mew.png",
    type: ["Psychic"],
    weight: "4,0 kg",
    height: "0,4 m",
    moves: ["Synchronize"],
    description:
      "When viewed through a microscope, this Pokemon's short, fine delicate hair can be seen.",
    stats: [
      {
        skills: "HP",
        Quantity: 100,
        fullmark: 110,
      },
      {
        skills: "ATK",
        Quantity: 100,
        fullmark: 110,
      },
      {
        skills: "DEF",
        Quantity: 100,
        fullmark: 110,
      },
      {
        skills: "SATK",
        Quantity: 100,
        fullmark: 110,
      },
      {
        skills: "SDEF",
        Quantity: 100,
        fullmark: 110,
      },
      {
        skills: "SPD",
        Quantity: 100,
        fullmark: 110,
      },
    ],
    color: "rgb(251, 85, 131)",
  },
  {
    nombre: "Aron",
    id: "304",
    img: "/img/Aron.png",
    type: ["Steal", "Rock"],
    weight: "60,0 kg",
    height: "0,4 m",
    color: "rgb(183, 185, 208)",
    moves: ["Sturdy", "Rock-Head"],
    description:
      "It eats iron ore- and sometimes railroad tracks -to build up the steel armor that protect its body.",
    stats: [
      {
        skills: "HP",
        Quantity: 50,
        fullmark: 110,
      },
      {
        skills: "ATK",
        Quantity: 70,
        fullmark: 110,
      },
      {
        skills: "DEF",
        Quantity: 100,
        fullmark: 110,
      },
      {
        skills: "SATK",
        Quantity: 40,
        fullmark: 110,
      },
      {
        skills: "SDEF",
        Quantity: 40,
        fullmark: 110,
      },
      {
        skills: "SPD",
        Quantity: 30,
        fullmark: 110,
      },
    ],
  },
];

export default pokemons;
