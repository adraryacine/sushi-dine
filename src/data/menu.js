// ============================================================================
//  SUSHIDINE — MENU DATA
// ============================================================================
//  Prices are in DA (Dinar Algérien). Extracted from the official menu boards.
//
//  HOW TO ADD A FOOD PHOTO (click-to-view in the menu):
//    1. Put the image file in:  public/images/food/
//    2. Set the item's `image` to:  '/images/food/your-file.jpg'
//  Until then, `image: null` shows a clean "photo coming soon" placeholder.
//
//  Two-size categories (e.g. California 4pcs / 8pcs) use `variants` + a price
//  object keyed by variant id. Single-price items just use a number.
// ============================================================================

// Reusable variant definitions
const PCS_4_8 = [
  { id: 's', label: { fr: '4 pcs', en: '4 pcs' } },
  { id: 'l', label: { fr: '8 pcs', en: '8 pcs' } },
]
const PCS_5_10 = [
  { id: 's', label: { fr: '5 pcs', en: '5 pcs' } },
  { id: 'l', label: { fr: '10 pcs', en: '10 pcs' } },
]

export const menuGroups = [
  { id: 'sushi', name: { fr: 'Box Sushi', en: 'Sushi Boxes' } },
  { id: 'rolls', name: { fr: 'Rolls & Makis', en: 'Rolls & Maki' } },
  { id: 'drinks', name: { fr: 'Boissons', en: 'Drinks' } },
  { id: 'desserts', name: { fr: 'Desserts Omochi', en: 'Omochi Desserts' } },
]

export const menu = [
  // ----------------------------------------------------------------- BOX SIMPLES
  {
    id: 'box-simples',
    group: 'sushi',
    name: { fr: 'Box Simples', en: 'Simple Boxes' },
    note: { fr: 'Selon le choix du chef', en: "Chef's selection" },
    items: [
      {
        id: 'box-kyuu',
        name: { fr: 'Box Kyuu', en: 'Box Kyuu' },
        desc: { fr: '9 pcs · 05 Futomaki, 04 California', en: '9 pcs · 05 Futomaki, 04 California' },
        price: 2200,
        image: null,
      },
      {
        id: 'box-jiuu',
        name: { fr: 'Box Jiuu', en: 'Box Jiuu' },
        desc: { fr: '10 pcs · 04 Crunchy, 04 California, 02 Nigiri', en: '10 pcs · 04 Crunchy, 04 California, 02 Nigiri' },
        price: 2500,
        image: null,
      },
      {
        id: 'box-jiuu-roku',
        name: { fr: 'Box Jiuu Roku', en: 'Box Jiuu Roku' },
        desc: {
          fr: '16 pcs · 04 California, 04 Crunchy, 06 Hosomaki, 02 Nigiri',
          en: '16 pcs · 04 California, 04 Crunchy, 06 Hosomaki, 02 Nigiri',
        },
        price: 3000,
        image: null,
      },
      {
        id: 'box-ni-jiuu-san',
        name: { fr: 'Box Ni Jiuu San', en: 'Box Ni Jiuu San' },
        desc: {
          fr: '23 pcs · 06 Hosomaki, 04 California, 04 Crunchy, 05 Futomaki, 04 Nigiri',
          en: '23 pcs · 06 Hosomaki, 04 California, 04 Crunchy, 05 Futomaki, 04 Nigiri',
        },
        price: 4200,
        image: null,
      },
      {
        id: 'box-san-jiuu-go',
        name: { fr: 'Box San Jiuu Go', en: 'Box San Jiuu Go' },
        desc: {
          fr: '35 pcs · 04 California, 06 Hosomaki, 08 Spring Roll, 08 Crunchy, 04 Nigiri, 05 Futomaki',
          en: '35 pcs · 04 California, 06 Hosomaki, 08 Spring Roll, 08 Crunchy, 04 Nigiri, 05 Futomaki',
        },
        price: 5600,
        image: null,
      },
      {
        id: 'box-go-jiuu-chi',
        name: { fr: 'Box Go Jiuu Chi', en: 'Box Go Jiuu Chi' },
        desc: {
          fr: '54 pcs · 10 Futomaki, 12 Hosomaki, 08 Crunchy, 08 California, 08 Nigiri, 08 Saumon',
          en: '54 pcs · 10 Futomaki, 12 Hosomaki, 08 Crunchy, 08 California, 08 Nigiri, 08 Salmon',
        },
        price: 9000,
        image: null,
      },
    ],
  },

  // ---------------------------------------------------------------- BOX PRESTIGE
  {
    id: 'box-prestige',
    group: 'sushi',
    name: { fr: 'Box Prestige', en: 'Prestige Boxes' },
    note: { fr: 'Selon le choix du chef', en: "Chef's selection" },
    items: [
      {
        id: 'box-ni-jiuu',
        name: { fr: 'Box Ni Jiuu', en: 'Box Ni Jiuu' },
        desc: {
          fr: '20 pcs · 08 Dragon Roll, 04 Spring Roll, 04 Chicken Roll, 04 Salmon Roll',
          en: '20 pcs · 08 Dragon Roll, 04 Spring Roll, 04 Chicken Roll, 04 Salmon Roll',
        },
        price: 4800,
        image: null,
      },
      {
        id: 'box-prestige-san-jiuu-go',
        name: { fr: 'Box San Jiuu Go', en: 'Box San Jiuu Go' },
        desc: {
          fr: '35 pcs · 08 Salmon Roll, 04 Dragon Roll, 04 Spring Roll, 04 Chicken Roll, 04 Nigiri, 06 Hosomaki, 05 Futomaki',
          en: '35 pcs · 08 Salmon Roll, 04 Dragon Roll, 04 Spring Roll, 04 Chicken Roll, 04 Nigiri, 06 Hosomaki, 05 Futomaki',
        },
        price: 7900,
        image: null,
      },
      {
        id: 'box-go-jiuu-roku',
        name: { fr: 'Box Go Jiuu Roku', en: 'Box Go Jiuu Roku' },
        desc: {
          fr: '56 pcs · 06 Nigiri, 08 Crunchy, 08 Salmon Roll, 08 Dragon Roll, 08 Spring Roll, 08 Chicken Roll, 10 Futomaki',
          en: '56 pcs · 06 Nigiri, 08 Crunchy, 08 Salmon Roll, 08 Dragon Roll, 08 Spring Roll, 08 Chicken Roll, 10 Futomaki',
        },
        price: 13000,
        image: null,
      },
    ],
  },

  // -------------------------------------------------------------- CALIFORNIA ROLLS
  {
    id: 'california',
    group: 'rolls',
    name: { fr: 'California Rolls', en: 'California Rolls' },
    note: { fr: 'Avocat, Cheese', en: 'Avocado, Cheese' },
    variants: PCS_4_8,
    items: [
      { id: 'cali-saumon', name: { fr: 'Saumon', en: 'Salmon' }, price: { s: 1000, l: 2000 }, image: null },
      { id: 'cali-dorade', name: { fr: 'Dorade', en: 'Sea bream' }, price: { s: 900, l: 1700 }, image: null },
      { id: 'cali-crevettes', name: { fr: 'Crevettes', en: 'Shrimp' }, price: { s: 900, l: 1700 }, image: null },
      { id: 'cali-poulet', name: { fr: 'Poulet', en: 'Chicken' }, price: { s: 800, l: 1500 }, image: null },
      {
        id: 'cali-thon',
        name: { fr: 'Thon', en: 'Tuna' },
        desc: { fr: 'Avocat, concombre, Cheese, thon (boîte)', en: 'Avocado, cucumber, Cheese, canned tuna' },
        price: { s: 700, l: 1400 },
        image: null,
      },
      { id: 'cali-surimi', name: { fr: 'Surimi', en: 'Surimi' }, price: { s: 600, l: 1200 }, image: null },
    ],
  },

  // -------------------------------------------------------------------- CRUNCHY
  {
    id: 'crunchy',
    group: 'rolls',
    name: { fr: 'Crunchy', en: 'Crunchy' },
    note: { fr: 'Avocat, Cheese', en: 'Avocado, Cheese' },
    variants: PCS_4_8,
    items: [
      { id: 'crun-saumon', name: { fr: 'Saumon', en: 'Salmon' }, price: { s: 1050, l: 2000 }, image: null },
      { id: 'crun-dorade', name: { fr: 'Dorade', en: 'Sea bream' }, price: { s: 950, l: 1800 }, image: null },
      { id: 'crun-crevettes', name: { fr: 'Crevettes', en: 'Shrimp' }, price: { s: 950, l: 1800 }, image: null },
      {
        id: 'crun-thon',
        name: { fr: 'Thon', en: 'Tuna' },
        desc: { fr: 'Avocat, Cheese, thon (boîte)', en: 'Avocado, Cheese, canned tuna' },
        price: { s: 750, l: 1500 },
        image: null,
      },
      { id: 'crun-poulet', name: { fr: 'Poulet', en: 'Chicken' }, price: { s: 850, l: 1600 }, image: null },
      { id: 'crun-surimi', name: { fr: 'Surimi', en: 'Surimi' }, price: { s: 650, l: 1200 }, image: null },
    ],
  },

  // ------------------------------------------------------------------- FUTOMAKI
  {
    id: 'futomaki',
    group: 'rolls',
    name: { fr: 'Futomaki', en: 'Futomaki' },
    note: { fr: 'Supplément Crunchy +200 DA', en: 'Crunchy supplement +200 DA' },
    variants: PCS_5_10,
    items: [
      {
        id: 'futo-saumon',
        name: { fr: 'Saumon', en: 'Salmon' },
        desc: { fr: 'Avocat, concombre, Cheese', en: 'Avocado, cucumber, Cheese' },
        price: { s: 1000, l: 2000 },
        image: null,
      },
      {
        id: 'futo-dorade',
        name: { fr: 'Dorade', en: 'Sea bream' },
        desc: { fr: 'Avocat, concombre, Cheese', en: 'Avocado, cucumber, Cheese' },
        price: { s: 950, l: 1800 },
        image: null,
      },
      {
        id: 'futo-crevettes',
        name: { fr: 'Crevettes', en: 'Shrimp' },
        desc: { fr: 'Avocat, Cheese, Concombre', en: 'Avocado, Cheese, cucumber' },
        price: { s: 950, l: 1800 },
        image: null,
      },
      {
        id: 'futo-poulet',
        name: { fr: 'Poulet', en: 'Chicken' },
        desc: { fr: 'Tampura, Avocat, Cheese, Concombre', en: 'Tempura, Avocado, Cheese, cucumber' },
        price: { s: 900, l: 1700 },
        image: null,
      },
      {
        id: 'futo-thon',
        name: { fr: 'Thon', en: 'Tuna' },
        desc: { fr: 'Avocat, concombre, Cheese, thon (boîte)', en: 'Avocado, cucumber, Cheese, canned tuna' },
        price: { s: 800, l: 1600 },
        image: null,
      },
      {
        id: 'futo-surimi',
        name: { fr: 'Surimi', en: 'Surimi' },
        desc: { fr: 'Avocat, concombre, Cheese', en: 'Avocado, cucumber, Cheese' },
        price: { s: 700, l: 1300 },
        image: null,
      },
      {
        id: 'futo-veg',
        name: { fr: 'Végétarien', en: 'Vegetarian' },
        desc: { fr: 'Concombre, Carottes, Avocat, Choux rouge', en: 'Cucumber, carrots, Avocado, red cabbage' },
        price: { s: 700, l: 1300 },
        tags: ['veg'],
        image: null,
      },
    ],
  },

  // -------------------------------------------------------------- PRESTIGE ROLLS
  {
    id: 'prestige-rolls',
    group: 'rolls',
    name: { fr: 'Prestige Rolls', en: 'Prestige Rolls' },
    variants: PCS_4_8,
    items: [
      {
        id: 'salmon-roll',
        name: { fr: 'Salmon Roll', en: 'Salmon Roll' },
        desc: { fr: 'Cheese, Concombre, Avocat, enveloppé de Saumon', en: 'Cheese, cucumber, Avocado, wrapped in Salmon' },
        price: { s: 1100, l: 2200 },
        image: null,
      },
      {
        id: 'dragon-roll',
        name: { fr: 'Dragon Roll', en: 'Dragon Roll' },
        desc: {
          fr: 'Crevettes Tampura, Cheese, Concombre, enveloppé d’Avocat',
          en: 'Tempura Shrimp, Cheese, cucumber, wrapped in Avocado',
        },
        price: { s: 1000, l: 2000 },
        image: null,
      },
      {
        id: 'chicken-roll',
        name: { fr: 'Chicken Roll', en: 'Chicken Roll' },
        desc: { fr: 'Poulet Tampura, Avocat, fromage gratiné', en: 'Tempura Chicken, Avocado, gratinated cheese' },
        price: { s: 800, l: 1900 },
        image: null,
      },
    ],
  },

  // ----------------------------------------------------------------- SPRING ROLL
  {
    id: 'spring-roll',
    group: 'rolls',
    name: { fr: 'Spring Roll', en: 'Spring Roll' },
    note: { fr: '8 pcs', en: '8 pcs' },
    items: [
      {
        id: 'spring-saumon',
        name: { fr: 'Saumon', en: 'Salmon' },
        desc: { fr: 'Galette de Riz, Laitue, Avocat, Cheese', en: 'Rice paper, lettuce, Avocado, Cheese' },
        price: 2200,
        image: null,
      },
      {
        id: 'spring-crevettes',
        name: { fr: 'Crevettes', en: 'Shrimp' },
        desc: { fr: 'Galette de Riz, Laitue, Avocat, Cheese', en: 'Rice paper, lettuce, Avocado, Cheese' },
        price: 2000,
        image: null,
      },
      {
        id: 'spring-poulet',
        name: { fr: 'Poulet', en: 'Chicken' },
        desc: { fr: 'Galette de Riz, Laitue, Avocat, Cheese', en: 'Rice paper, lettuce, Avocado, Cheese' },
        price: 1500,
        image: null,
      },
      {
        id: 'spring-thon',
        name: { fr: 'Thon', en: 'Tuna' },
        desc: { fr: 'Avocat, concombre, Cheese, thon (boîte)', en: 'Avocado, cucumber, Cheese, canned tuna' },
        price: 1200,
        image: null,
      },
      {
        id: 'spring-veg',
        name: { fr: 'Végétarien', en: 'Vegetarian' },
        desc: { fr: 'Galette de Riz, Laitue, Avocat, Cheese', en: 'Rice paper, lettuce, Avocado, Cheese' },
        price: 1000,
        tags: ['veg'],
        image: null,
      },
    ],
  },

  // ------------------------------------------------------------- BOISSONS FRAÎCHES
  {
    id: 'boissons-fraiches',
    group: 'drinks',
    name: { fr: 'Boissons Fraîches', en: 'Cold Drinks' },
    items: [
      { id: 'canette', name: { fr: 'Canette 33 cl', en: 'Can 33 cl' }, price: 100, image: null },
      { id: 'jus-33', name: { fr: 'Jus 33 cl (Plastique)', en: 'Juice 33 cl (plastic)' }, price: 80, image: null },
      { id: 'gazeuse-33', name: { fr: 'Boisson Gazeuse 33 cl', en: 'Soda 33 cl' }, price: 70, image: null },
      { id: 'gazeuse-50', name: { fr: 'Boisson Gazeuse 50 cl', en: 'Soda 50 cl' }, price: 100, image: null },
      { id: 'gazeuse-1l', name: { fr: 'Boisson Gazeuse 1L', en: 'Soda 1L' }, price: 150, image: null },
      { id: 'eau-pm', name: { fr: 'Eau Minérale (Pm)', en: 'Mineral Water (small)' }, price: 30, image: null },
      { id: 'jus-1l', name: { fr: 'Jus 1L', en: 'Juice 1L' }, price: 200, image: null },
      { id: 'eau-gm', name: { fr: 'Eau Minérale (Gm)', en: 'Mineral Water (large)' }, price: 50, image: null },
    ],
  },

  // ----------------------------------------------------------- BOISSONS ASIATIQUE
  {
    id: 'boissons-asiatique',
    group: 'drinks',
    name: { fr: 'Boissons Asiatique', en: 'Asian Drinks' },
    items: [
      { id: 'bubble-tea', name: { fr: 'Bubble Tea', en: 'Bubble Tea' }, price: 600, image: null },
      { id: 'ube', name: { fr: 'Ube', en: 'Ube' }, price: 600, image: null },
      { id: 'matcha-latte', name: { fr: 'Thé Matcha Latte', en: 'Matcha Latte' }, price: 600, image: null },
      { id: 'matcha-fraise', name: { fr: 'Thé Matcha Fraise', en: 'Strawberry Matcha' }, price: 700, image: null },
      { id: 'matcha-mangue', name: { fr: 'Thé Matcha Mangue', en: 'Mango Matcha' }, price: 700, image: null },
      { id: 'the-thai', name: { fr: 'Thé Thaï', en: 'Thai Tea' }, price: 700, image: null },
    ],
  },

  // ------------------------------------------------------------------ JUS NATURELS
  {
    id: 'jus-naturels',
    group: 'drinks',
    name: { fr: 'Jus Naturels', en: 'Fresh Juices' },
    items: [
      { id: 'jus-citron', name: { fr: 'Jus Citron', en: 'Lemon Juice' }, price: 100, image: null },
      { id: 'jus-orange', name: { fr: 'Jus Orange', en: 'Orange Juice' }, price: 120, image: null },
      { id: 'jus-fraise', name: { fr: 'Fraise', en: 'Strawberry' }, price: 200, image: null },
    ],
  },

  // ----------------------------------------------------------------------- MOCHIS
  {
    id: 'mochis',
    group: 'desserts',
    name: { fr: 'Mochis', en: 'Mochi' },
    items: [
      { id: 'mochi-caramel', name: { fr: 'Caramel', en: 'Caramel' }, price: 450, image: null },
      { id: 'mochi-mangue', name: { fr: 'Mangue', en: 'Mango' }, price: 450, image: null },
      { id: 'mochi-fraise', name: { fr: 'Fraise', en: 'Strawberry' }, price: 450, image: null },
      { id: 'mochi-coco', name: { fr: 'Noix de coco', en: 'Coconut' }, price: 450, image: null },
      { id: 'mochi-exotique', name: { fr: 'Exotique', en: 'Exotic' }, price: 450, image: null },
      { id: 'mochi-framboise', name: { fr: 'Framboise', en: 'Raspberry' }, price: 450, image: null },
      { id: 'mochi-haricots', name: { fr: 'Haricots rouge', en: 'Red bean' }, price: 450, image: null },
      { id: 'mochi-cerise', name: { fr: 'Cerise', en: 'Cherry' }, price: 450, image: null },
      { id: 'mochi-fruits-bois', name: { fr: 'Fruits des bois', en: 'Wild berries' }, price: 450, image: null },
      { id: 'mochi-ferrero', name: { fr: 'Ferrero Rocher', en: 'Ferrero Rocher' }, price: 450, image: null },
      { id: 'mochi-pistache', name: { fr: 'Pistache', en: 'Pistachio' }, price: 500, image: null },
      { id: 'mochi-chewing-gum', name: { fr: 'Chewing Gum', en: 'Bubble gum' }, price: 500, image: null },
    ],
  },

  // --------------------------------------------------------------------- TIRAMISU
  {
    id: 'tiramisu',
    group: 'desserts',
    name: { fr: 'Tiramisu', en: 'Tiramisu' },
    note: { fr: 'Selon disponibilité', en: 'Subject to availability' },
    items: [
      {
        id: 'tiramisu-gf',
        name: { fr: 'Tiramisu (GF)', en: 'Tiramisu (large)' },
        desc: { fr: 'Bueno, Pistache, Ferrero', en: 'Bueno, Pistachio, Ferrero' },
        price: 800,
        image: null,
      },
      {
        id: 'tiramisu-pf',
        name: { fr: 'Tiramisu (PF)', en: 'Tiramisu (small)' },
        desc: {
          fr: 'Bueno, Pistache, Ferrero, Speculos, Exotique, Coco, Fraise, Cerise',
          en: 'Bueno, Pistachio, Ferrero, Speculoos, Exotic, Coconut, Strawberry, Cherry',
        },
        price: 400,
        image: null,
      },
      { id: 'tiramisu-balls-ferrero', name: { fr: 'Tiramisu Balls Ferrero', en: 'Tiramisu Balls Ferrero' }, price: 450, image: null },
      { id: 'tiramisu-balls-pistache', name: { fr: 'Tiramisu Balls Pistache', en: 'Tiramisu Balls Pistachio' }, price: 500, image: null },
    ],
  },

  // ------------------------------------------------------------ NOUNOURS & FLUFFY
  {
    id: 'nounours',
    group: 'desserts',
    name: { fr: 'Nounours & Fluffy Cat', en: 'Teddy & Fluffy Cat' },
    items: [
      { id: 'nounours-ferrero', name: { fr: 'Nounours Ferrero', en: 'Teddy Ferrero' }, price: 450, image: null },
      { id: 'nounours-pistache', name: { fr: 'Nounours Pistache', en: 'Teddy Pistachio' }, price: 500, image: null },
      { id: 'fluffy-cat', name: { fr: 'Fluffy Cat', en: 'Fluffy Cat' }, price: 400, image: null },
    ],
  },
]
