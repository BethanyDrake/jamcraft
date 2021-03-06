
const unvaluedItems = [
  { name: "black", colour: [0, 0, 0], value: 10, hexString: "#000000" },
  { name: "midnight", colour: [0, 0, 2], value: 10, hexString: "#000040" },
  { name: "navy", colour: [0, 0, 4], value: 10, hexString: "#000080" },
  { name: "sapphire", colour: [0, 0, 6], value: 10, hexString: "#0000C0" },
  { name: "blue", colour: [0, 0, 8], value: 10, hexString: "#0000FF" },
  { name: "deep fir", colour: [0, 2, 0], value: 10, hexString: "#004000" },
  { name: "cyprus", colour: [0, 2, 2], value: 10, hexString: "#004040" },
  { name: "denim blue", colour: [0, 2, 4], value: 10, hexString: "#004080" },
  { name: "cobalt", colour: [0, 2, 6], value: 10, hexString: "#0040C0" },
  { name: "ultramarine", colour: [0, 2, 8], value: 10, hexString: "#0040FF" },
  { name: "forest green", colour: [0, 4, 0], value: 10, hexString: "#008000" },
  { name: "sea green", colour: [0, 4, 2], value: 10, hexString: "#008040" },
  { name: "teal", colour: [0, 4, 4], value: 10, hexString: "#008080" },
  { name: "azure", colour: [0, 4, 6], value: 10, hexString: "#0080C0" },
  { name: "sky blue", colour: [0, 4, 8], value: 10, hexString: "#0080FF" },
  { name: "lime green", colour: [0, 6, 0], value: 10, hexString: "#00C000" },
  { name: "malachite", colour: [0, 6, 2], value: 10, hexString: "#00C040" },
  { name: "mint", colour: [0, 6, 4], value: 10, hexString: "#00C080" },
  { name: "turquoise", colour: [0, 6, 6], value: 10, hexString: "#00C0C0" },
  { name: "cerulean", colour: [0, 6, 8], value: 10, hexString: "#00C0FF" },
  { name: "harlequin", colour: [0, 8, 0], value: 10, hexString: "#00FF00" },
  { name: "electric green", colour: [0, 8, 2], value: 10, hexString: "#00FF40" },
  { name: "spring green", colour: [0, 8, 4], value: 10, hexString: "#00FF80" },
  { name: "aqua", colour: [0, 8, 6], value: 10, hexString: "#00FFC0" },
  { name: "cyan", colour: [0, 8, 8], value: 10, hexString: "#00FFFF" },
  { name: "chocolate", colour: [2, 0, 0], value: 10, hexString: "#400000" },
  { name: "plum", colour: [2, 0, 2], value: 10, hexString: "#400040" },
  { name: "indigo", colour: [2, 0, 4], value: 10, hexString: "#400080" },
  { name: "purple", colour: [2, 0, 6], value: 10, hexString: "#4000C0" },
  { name: "electric indigo", colour: [2, 0, 8], value: 10, hexString: "#4000FF" },
  { name: "army green", colour: [2, 2, 0], value: 10, hexString: "#404000" },
  { name: "tundora", colour: [2, 2, 2], value: 10, hexString: "#404040" },
  { name: "grape", colour: [2, 2, 4], value: 10, hexString: "#404080" },
  { name: "lapis lazuli", colour: [2, 2, 6], value: 10, hexString: "#4040C0" },
  { name: "iris", colour: [2, 2, 8], value: 10, hexString: "#4040FF" },
  { name: "sap green", colour: [2, 4, 0], value: 10, hexString: "#408000" },
  { name: "goblin", colour: [2, 4, 2], value: 10, hexString: "#408040" },
  { name: "myrtle green", colour: [2, 4, 4], value: 10, hexString: "#408080" },
  { name: "steel blue", colour: [2, 4, 6], value: 10, hexString: "#4080C0" },
  { name: "dodger blue", colour: [2, 4, 8], value: 10, hexString: "#4080FF" },
  { name: "limeade", colour: [2, 6, 0], value: 10, hexString: "#40C000" },
  { name: "apple", colour: [2, 6, 2], value: 10, hexString: "#40C040" },
  { name: "emerald", colour: [2, 6, 4], value: 10, hexString: "#40C080" },
  { name: "tiffany blue", colour: [2, 6, 6], value: 10, hexString: "#40C0C0" },
  { name: "blue bolt", colour: [2, 6, 8], value: 10, hexString: "#40C0FF" },
  { name: "clorophyll green", colour: [2, 8, 0], value: 10, hexString: "#40FF00" },
  { name: "screaming green", colour: [2, 8, 2], value: 10, hexString: "#40FF40" },
  { name: "guppie green", colour: [2, 8, 4], value: 10, hexString: "#40FF80" },
  { name: "aquamarine", colour: [2, 8, 6], value: 10, hexString: "#40FFC0" },
  { name: "baby blue", colour: [2, 8, 8], value: 10, hexString: "#40FFFF" },
  { name: "maroon", colour: [4, 0, 0], value: 10, hexString: "#800000" },
  { name: "rose", colour: [4, 0, 2], value: 10, hexString: "#800040" },
  { name: "eggplant", colour: [4, 0, 4], value: 10, hexString: "#800080" },
  { name: "violet", colour: [4, 0, 6], value: 10, hexString: "#8000C0" },
  { name: "electric violet", colour: [4, 0, 8], value: 10, hexString: "#8000FF" },
  { name: "cinnamon", colour: [4, 2, 0], value: 10, hexString: "#804000" },
  { name: "cordovan", colour: [4, 2, 2], value: 10, hexString: "#804040" },
  { name: "berry", colour: [4, 2, 4], value: 10, hexString: "#804080" },
  { name: "orchid", colour: [4, 2, 6], value: 10, hexString: "#8040C0" },
  { name: "vivid violet", colour: [4, 2, 8], value: 10, hexString: "#8040FF" },
  { name: "olive", colour: [4, 4, 0], value: 10, hexString: "#808000" },
  { name: "moss green", colour: [4, 4, 2], value: 10, hexString: "#808040" },
  { name: "grey", colour: [4, 4, 4], value: 10, hexString: "#808080" },
  { name: "lavender", colour: [4, 4, 6], value: 10, hexString: "#8080C0" },
  { name: "ube", colour: [4, 4, 8], value: 10, hexString: "#8080FF" },
  { name: "pistachio", colour: [4, 6, 0], value: 10, hexString: "#80C000" },
  { name: "asda", colour: [4, 6, 2], value: 10, hexString: "#80C040" },
  { name: "iguana green", colour: [4, 6, 4], value: 10, hexString: "#80C080" },
  { name: "neptune", colour: [4, 6, 6], value: 10, hexString: "#80C0C0" },
  { name: "malibu", colour: [4, 6, 8], value: 10, hexString: "#80C0FF" },
  { name: "chartreuse", colour: [4, 8, 0], value: 10, hexString: "#80FF00" },
  { name: "lawn green", colour: [4, 8, 2], value: 10, hexString: "#80FF40" },
  { name: "pale green", colour: [4, 8, 4], value: 10, hexString: "#80FF80" },
  { name: "sea foam green", colour: [4, 8, 6], value: 10, hexString: "#80FFC0" },
  { name: "waterspout", colour: [4, 8, 8], value: 10, hexString: "#80FFFF" },
  { name: "venetian red", colour: [6, 0, 0], value: 10, hexString: "#C00000" },
  { name: "carmine", colour: [6, 0, 2], value: 10, hexString: "#C00040" },
  { name: "magenta", colour: [6, 0, 4], value: 10, hexString: "#C00080" },
  { name: "mulberry", colour: [6, 0, 6], value: 10, hexString: "#C000C0" },
  { name: "purple 2.0", colour: [6, 0, 8], value: 10, hexString: "#C000FF" },
  { name: "rust", colour: [6, 2, 0], value: 10, hexString: "#C04000" },
  { name: "choral", colour: [6, 2, 2], value: 10, hexString: "#C04040" },
  { name: "fuchsia", colour: [6, 2, 4], value: 10, hexString: "#C04080" },
  { name: "deep fuchsia", colour: [6, 2, 6], value: 10, hexString: "#C040C0" },
  { name: "phlox", colour: [6, 2, 8], value: 10, hexString: "#C040FF" },
  { name: "pirate gold", colour: [6, 4, 0], value: 10, hexString: "#C08000" },
  { name: "tussock", colour: [6, 4, 2], value: 10, hexString: "#C08040" },
  { name: "old rose", colour: [6, 4, 4], value: 10, hexString: "#C08080" },
  { name: "mauve", colour: [6, 4, 6], value: 10, hexString: "#C080C0" },
  { name: "heliotrope", colour: [6, 4, 8], value: 10, hexString: "#C080FF" },
  { name: "snot green", colour: [6, 6, 0], value: 10, hexString: "#C0C000" },
  { name: "margarita", colour: [6, 6, 2], value: 10, hexString: "#C0C040" },
  { name: "khaki", colour: [6, 6, 4], value: 10, hexString: "#C0C080" },
  { name: "silver", colour: [6, 6, 6], value: 10, hexString: "#C0C0C0" },
  { name: "lilac", colour: [6, 6, 8], value: 10, hexString: "#C0C0FF" },
  { name: "bitter lime", colour: [6, 8, 0], value: 10, hexString: "#C0FF00" },
  { name: "volt", colour: [6, 8, 2], value: 10, hexString: "#C0FF40" },
  { name: "menthol", colour: [6, 8, 4], value: 10, hexString: "#C0FF80" },
  { name: "snowy mint", colour: [6, 8, 6], value: 10, hexString: "#C0FFC0" },
  { name: "celeste", colour: [6, 8, 8], value: 10, hexString: "#C0FFFF" },
  { name: "red", colour: [8, 0, 0], value: 10, hexString: "#FF0000" },
  { name: "half-hearted red rose", colour: [8, 0, 2], value: 10, hexString: "#FF0040" },
  { name: "hot pink", colour: [8, 0, 4], value: 10, hexString: "#FF0080" },
  { name: "so very pink", colour: [8, 0, 6], value: 10, hexString: "#FF00C0" },
  { name: "pink pizzazz", colour: [8, 0, 8], value: 10, hexString: "#FF00FF" },
  { name: "vermillion", colour: [8, 2, 0], value: 10, hexString: "#FF4000" },
  { name: "sunburnt cyclops", colour: [8, 2, 2], value: 10, hexString: "#FF4040" },
  { name: "strawberry", colour: [8, 2, 4], value: 10, hexString: "#FF4080" },
  { name: "razzle dazzle", colour: [8, 2, 6], value: 10, hexString: "#FF40C0" },
  { name: "flamingo", colour: [8, 2, 8], value: 10, hexString: "#FF40FF" },
  { name: "amber", colour: [8, 4, 0], value: 10, hexString: "#FF8000" },
  { name: "orange", colour: [8, 4, 2], value: 10, hexString: "#FF8040" },
  { name: "salmon", colour: [8, 4, 4], value: 10, hexString: "#FF8080" },
  { name: "princess pink", colour: [8, 4, 6], value: 10, hexString: "#FF80C0" },
  { name: "baby pink", colour: [8, 4, 8], value: 10, hexString: "#FF80FF" },
  { name: "mango", colour: [8, 6, 0], value: 10, hexString: "#FFC000" },
  { name: "light orange", colour: [8, 6, 2], value: 10, hexString: "#FFC040" },
  { name: "topaz", colour: [8, 6, 4], value: 10, hexString: "#FFC080" },
  { name: "dusty pink", colour: [8, 6, 6], value: 10, hexString: "#FFC0C0" },
  { name: "pink lace", colour: [8, 6, 8], value: 10, hexString: "#FFC0FF" },
  { name: "yellow", colour: [8, 8, 0], value: 10, hexString: "#FFFF00" },
  { name: "daffodil", colour: [8, 8, 2], value: 10, hexString: "#FFFF40" },
  { name: "pastel yellow", colour: [8, 8, 4], value: 10, hexString: "#FFFF80" },
  { name: "pale yellow", colour: [8, 8, 6], value: 10, hexString: "#FFFFC0" },
  { name: "white", colour: [8, 8, 8], value: 10, hexString: "#FFFFFF" }
];

export const items = unvaluedItems.map(item => {
  const value = Math.ceil((Math.random() * 200));
  return {
    ...item,
    value,
  };
})
