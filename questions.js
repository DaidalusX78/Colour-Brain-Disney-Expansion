/**
 * ============================================================================
 * COLOUR BRAIN: DISNEY & PIXAR EXPANSION DECK - TRIVIA QUESTION DATABASE
 * Version: v1.11.7 | Database CSV: v1.7.0 | Synchronized: 2026-10-28
 * ============================================================================
 * 
 * HOW TO ADD OR EDIT QUESTIONS:
 * ----------------------------------------------------------------------------
 * Each question object contains the following properties:
 * 
 * - id: (Number) Unique sequential ID number for the question.
 * - deck: (String) Category filter. Choose from:
 *     • 'disney'        - Walt Disney Animation Studios (Classics & Modern)
 *     • 'pixar'         - Pixar Animation Studios
 *     • 'lucasfilm'     - Lucasfilm & Star Wars Universe
 *     • 'marvel'        - Marvel Studios & MCU
 *     • 'disneychannel' - Disney Channel Original Movies & Series (Descendants, Zombies, Electric Bloom, Vampirina, etc.)
 * - franchise: (String) English name of the film or TV series (e.g. 'Encanto', 'Moana', 'Electric Bloom').
 * - franchise_es: (String, Optional) Spanish localized title (e.g. 'Del revés 2', 'Vaiana', 'Una Vampirina adolescente').
 * - logo_url: (String, Optional) Path (e.g. 'assets/logos/film.webp') or web URL to franchise logo (Question side).
 * - logo_url_es: (String, Optional) Path or web URL to Spanish franchise logo.
 * - image_url: (String, Optional) Path (e.g. 'assets/answers/character.webp') or web URL to answer illustration (Answer side).
 * - image_url_es: (String, Optional) Path or web URL to Spanish answer illustration.
 * - image_position: (String, Optional) CSS object-position focal point (e.g. 'top', 'center 20%', 'bottom'). Defaults to 'center top'.
 * - question: (String) English question text.
 * - question_es: (String) Spanish translation of the question text.
 * - colors: (Array of Strings) Valid answers strictly matching the 11 Colour Brain cards:
 *     'red', 'blue', 'green', 'yellow', 'orange', 'purple',
 *     'pink', 'brown', 'black', 'white', 'grey'
 * - colors_es: (String, Optional) Spanish localized colour names (e.g. 'verde', 'gris;rosa').
 * - explanation: (String) English context explanation revealed on the card back.
 * - explanation_es: (String) Spanish context explanation.
 * ============================================================================
 */

window.QUESTIONS_VERSION = 'v1.12.1';

window.QUESTIONS_MASTER = [
  {
    "id": 1,
    "deck": "disney",
    "franchise": "Encanto",
    "franchise_es": "Encanto",
    "logo_url": "assets/logos/encanto.svg",
    "logo_url_es": "assets/logos/encanto.svg",
    "image_url": "assets/answers/bruno_madrigal.webp",
    "image_url_es": "assets/answers/bruno_madrigal.webp",
    "question": "What colour is Bruno's signature ruana (poncho)?",
    "question_es": "¿De qué color es la ruana (poncho) característica de Bruno en Encanto?",
    "colors": [
      "green"
    ],
    "colors_es": "verde",
    "explanation": "Bruno wears an emerald jade green ruana with hourglass patterns across the chest.",
    "explanation_es": "Bruno viste una ruana verde jade con motivos de relojes de arena bordados."
  },
  {
    "id": 2,
    "deck": "disney",
    "franchise": "Encanto",
    "franchise_es": "Encanto",
    "logo_url": "assets/logos/encanto.svg",
    "logo_url_es": "assets/logos/encanto.svg",
    "image_url": "assets/answers/mirabel_madrigal.webp",
    "image_url_es": "assets/answers/mirabel_madrigal.webp",
    "image_position": "bottom",
    "question": "What two colours are featured on Mirabel's skirt embroidery and ribbon trim?",
    "question_es": "¿Qué dos colores predominan en los bordados y el ribete de la falda de Mirabel?",
    "colors": [
      "blue",
      "pink"
    ],
    "colors_es": "azul;rosa",
    "explanation": "Mirabel's traditional Colombian skirt features bright blue fabric and vibrant pink embroidered pom-poms.",
    "explanation_es": "La falda tradicional de Mirabel luce tela azul con borlas y bordados fucsia y rosa."
  },
  {
    "id": 3,
    "deck": "disney",
    "franchise": "Encanto",
    "franchise_es": "Encanto",
    "logo_url": "assets/logos/encanto.svg",
    "logo_url_es": "assets/logos/encanto.svg",
    "image_url": "assets/answers/encanto_casita.webp",
    "image_url_es": "assets/answers/encanto_casita.webp",
    "question": "What colour are the magical glowing cracks in Casita?",
    "question_es": "¿De qué color son las grietas mágicas brillantes en Casita?",
    "colors": [
      "yellow"
    ],
    "colors_es": "amarillo",
    "explanation": "The cracks that threaten the Madrigal miracle pulse with bright golden yellow light.",
    "explanation_es": "Las grietas que amenazan el milagro de los Madrigal emiten una luz dorada y amarilla brillante."
  },
  {
    "id": 4,
    "deck": "disney",
    "franchise": "Wish",
    "franchise_es": "Wish: El poder de los deseos",
    "logo_url": "assets/logos/wish.webp",
    "logo_url_es": "assets/logos/wish.webp",
    "image_url": "assets/answers/Star.webp",
    "image_url_es": "assets/answers/Star.webp",
    "question": "What colour is Star, Asha's energetic cosmic wishing companion?",
    "question_es": "¿De qué color es Estrella, la compañera cósmica de Asha en Wish?",
    "colors": [
      "yellow"
    ],
    "colors_es": "amarillo",
    "explanation": "Star is a cheerful cosmic ball of glowing celestial yellow starlight with a sweet round face.",
    "explanation_es": "Estrella es una chispeante esfera mágica de luz celeste amarilla brillante y grandes ojos."
  },
  {
    "id": 5,
    "deck": "disney",
    "franchise": "Wish",
    "franchise_es": "Wish: El poder de los deseos",
    "logo_url": "assets/logos/wish.webp",
    "logo_url_es": "assets/logos/wish.webp",
    "image_url": "assets/answers/king_magnifico.webp",
    "image_url_es": "assets/answers/king_magnifico.webp",
    "question": "What colour is King Magnifico's royal cape lining in Rosas?",
    "question_es": "¿De qué color es el forro de la capa real del Rey Magnífico en Rosas?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Magnifico's crisp ivory robe is lined with deep blue silk that ripples when he casts spells.",
    "explanation_es": "La túnica marfil del Rey Magnífico está forrada con elegante seda azul."
  },
  {
    "id": 6,
    "deck": "disney",
    "franchise": "Wish",
    "franchise_es": "Wish: El poder de los deseos",
    "logo_url": "assets/logos/wish.webp",
    "logo_url_es": "assets/logos/wish.webp",
    "image_url": "assets/answers/valentino.webp",
    "image_url_es": "assets/answers/valentino.webp",
    "image_position": "center 20%",
    "question": "What colour is Valentino the talking goat's wool fleece?",
    "question_es": "¿De qué color es el pelaje de lana de la cabra parlante Valentino?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Valentino has warm cinnamon-brown fleece paired with his soft yellow knitted pajamas.",
    "explanation_es": "Valentino tiene un suave pelaje color marrón canela combinado con su pijama amarillo."
  },
  {
    "id": 7,
    "deck": "pixar",
    "franchise": "Inside Out 2",
    "franchise_es": "Del Revés 2",
    "logo_url": "assets/logos/inside_out_2.svg",
    "logo_url_es": "assets/logos/inside_out_2.webp",
    "image_url": "assets/answers/anxiety.webp",
    "image_url_es": "assets/answers/anxiety.webp",
    "image_position": "center 20%",
    "question": "What colour is Anxiety, the new emotion in Riley's headquarters?",
    "question_es": "¿De qué color es Ansiedad, la nueva emoción en la mente de Riley?",
    "colors": [
      "orange"
    ],
    "colors_es": "naranja",
    "explanation": "Anxiety is an electrifying bright orange whirlwind of kinetic nerves and luggage.",
    "explanation_es": "Ansiedad es un torbellino de nervios color naranja brillante con maletas preparadas."
  },
  {
    "id": 8,
    "deck": "pixar",
    "franchise": "Inside Out 2",
    "franchise_es": "Del Revés 2",
    "logo_url": "assets/logos/inside_out_2.svg",
    "logo_url_es": "assets/logos/inside_out_2.webp",
    "image_url": "assets/answers/envy.webp",
    "image_url_es": "assets/answers/envy.webp",
    "question": "What colour is Envy, the tiny wide-eyed emotion in Riley's mind?",
    "question_es": "¿De qué color es Envidia, la pequeña emoción de ojos brillantes en Inside Out 2?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Envy is a miniature blue emotional powerhouse who sparkles whenever she sees something cool.",
    "explanation_es": "Envidia es una diminuta figura azul brillante que se maravilla con todo."
  },
  {
    "id": 9,
    "deck": "pixar",
    "franchise": "Inside Out 2",
    "franchise_es": "Del Revés 2",
    "logo_url": "assets/logos/inside_out_2.svg",
    "logo_url_es": "assets/logos/inside_out_2.webp",
    "image_url": "assets/answers/ennui.webp",
    "image_url_es": "assets/answers/ennui.webp",
    "question": "What colour is Ennui, the bored smartphone-scrolling French emotion?",
    "question_es": "¿De qué color es Ennui (Aburrimiento), la emoción parisina pegada al móvil?",
    "colors": [
      "purple"
    ],
    "colors_es": "morado",
    "explanation": "Ennui lounges endlessly in dark indigo-purple comfort while controlling the console from her app.",
    "explanation_es": "Ennui descansa indolente en un tono morado e índigo oscuro mientras maneja la consola."
  },
  {
    "id": 10,
    "deck": "pixar",
    "franchise": "Inside Out 2",
    "franchise_es": "Del Revés 2",
    "logo_url": "assets/logos/inside_out_2.svg",
    "logo_url_es": "assets/logos/inside_out_2.webp",
    "image_url": "assets/answers/embarrassment.webp",
    "image_url_es": "assets/answers/embarrassment.webp",
    "question": "What colour is Embarrassment's giant cozy hoodie?",
    "question_es": "¿De qué color es la enorme sudadera con capucha de Vergüenza?",
    "colors": [
      "grey"
    ],
    "colors_es": "gris",
    "explanation": "The hulking, gentle giant Embarrassment hides his red face inside a grey hoodie.",
    "explanation_es": "El tímido y gigante Vergüenza esconde su sonrojada cara en una sudadera gris."
  },
  {
    "id": 11,
    "deck": "pixar",
    "franchise": "Turning Red",
    "franchise_es": "Red",
    "logo_url": "assets/logos/turning_red.webp",
    "logo_url_es": "assets/logos/red.webp",
    "image_url": "assets/answers/red_mei.webp",
    "image_url_es": "assets/answers/red_mei.webp",
    "question": "What colour is Meilin \"Mei\" Lee's giant fluffy transformed red panda form?",
    "question_es": "¿De qué color es la forma gigante de panda rojo en la que se transforma Meilin \"Mei\" Lee?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "When her emotions surge, Mei explodes into an enormous, fluffy russet-red panda!",
    "explanation_es": "¡Cuando se emociona, Mei se transforma en un enorme y esponjoso panda color rojo cobrizo!"
  },
  {
    "id": 12,
    "deck": "pixar",
    "franchise": "Turning Red",
    "franchise_es": "Red",
    "logo_url": "assets/logos/turning_red.webp",
    "logo_url_es": "assets/logos/red.webp",
    "image_url": "assets/answers/red_miriam.webp",
    "image_url_es": "assets/answers/red_miriam.webp",
    "question": "What colour is the knit beanie worn by Mei's friend Miriam?",
    "question_es": "¿De qué color es el gorro de punto que lleva puesto Miriam, la amiga de Mei?",
    "colors": [
      "green"
    ],
    "colors_es": "verde",
    "explanation": "Tomboy Miriam rocks a forest green beanie.",
    "explanation_es": "Miriam lleva un gorro verde bosque."
  },
  {
    "id": 13,
    "deck": "pixar",
    "franchise": "Elemental",
    "franchise_es": "Elemental",
    "logo_url": "assets/logos/elemental.webp",
    "logo_url_es": "assets/logos/elemental.webp",
    "image_url": "assets/answers/elemental_ember.webp",
    "image_url_es": "assets/answers/elemental_ember.webp",
    "question": "What colour is Ember Lumen, the fiery Fire Town shopkeeper's daughter?",
    "question_es": "¿De qué color es Ember Lumen, la enérgica chica de fuego en Elemental?",
    "colors": [
      "orange",
      "yellow"
    ],
    "colors_es": "naranja;amarillo",
    "explanation": "Ember's burning body blazes in vibrant gradients of incandescent orange and bright yellow flames.",
    "explanation_es": "El cuerpo ardiente de Ember resplandece en brillantes llamas naranjas y amarillas."
  },
  {
    "id": 14,
    "deck": "pixar",
    "franchise": "Elemental",
    "franchise_es": "Elemental",
    "logo_url": "assets/logos/elemental.webp",
    "logo_url_es": "assets/logos/elemental.webp",
    "image_url": "assets/answers/elemental_wade.webp",
    "image_url_es": "assets/answers/elemental_wade.webp",
    "question": "What colour is Wade Ripple, the emotional water city inspector?",
    "question_es": "¿De qué color es Wade Ripple, el sensible inspector de agua en Elemental?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Wade is completely composed of crystalline, transparent sky-blue flowing water.",
    "explanation_es": "Wade está compuesto totalmente por agua pura y cristalina de color azul celeste."
  },
  {
    "id": 15,
    "deck": "pixar",
    "franchise": "Luca",
    "franchise_es": "Luca",
    "logo_url": "assets/logos/luca.webp",
    "logo_url_es": "assets/logos/luca.webp",
    "image_url": "assets/answers/Luca.webp",
    "image_url_es": "assets/answers/Luca.webp",
    "question": "What two colours are Luca's scales and fins in his natural sea monster form?",
    "question_es": "¿Qué dos colores tienen las escamas y aletas de Luca en su forma marina?",
    "colors": [
      "blue",
      "green"
    ],
    "colors_es": "azul;verde",
    "explanation": "Underwater, Luca gleams in iridescent ocean shades of seafoam green and deep cobalt blue.",
    "explanation_es": "Bajo el agua, Luca luce brillantes escamas verde agua con crestas y aletas azul cobalto."
  },
  {
    "id": 16,
    "deck": "pixar",
    "franchise": "Luca",
    "franchise_es": "Luca",
    "logo_url": "assets/logos/luca.webp",
    "logo_url_es": "assets/logos/luca.webp",
    "image_url": "assets/answers/luca_scooter.webp",
    "image_url_es": "assets/answers/luca_scooter.webp",
    "question": "What colour is the coveted Vespa scooter Luca and Alberto dream of riding?",
    "question_es": "¿De qué color es la preciada Vespa con la que sueñan Luca y Alberto?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "The boys obsess over a fiery glossy Italian red vintage Vespa scooter.",
    "explanation_es": "Los chicos admiran con fascinación una clásica motoneta Vespa italiana de color rojo brillante."
  },
  {
    "id": 17,
    "deck": "disney",
    "franchise": "Moana",
    "franchise_es": "Vaiana",
    "logo_url": "assets/logos/moana.webp",
    "logo_url_es": "assets/logos/vaiana.webp",
    "image_url": "assets/answers/heart_te_fiti.webp",
    "image_url_es": "assets/answers/heart_te_fiti.webp",
    "question": "What colour is the mystical spiraled Heart of Te Fiti?",
    "question_es": "¿De qué color es la piedra mágica en espiral del Corazón de Te Fiti?",
    "colors": [
      "green"
    ],
    "colors_es": "verde",
    "explanation": "The life-giving stone gem is an emerald pounamu green spiral amulet.",
    "explanation_es": "La gema de la vida es una piedra pounamu verde esmeralda tallada en espiral sagrada."
  },
  {
    "id": 18,
    "deck": "pixar",
    "franchise": "Coco",
    "franchise_es": "Coco",
    "logo_url": "assets/logos/coco.svg",
    "logo_url_es": "assets/logos/coco.svg",
    "image_url": "assets/answers/ernesto_de_la_cruz.webp",
    "image_url_es": "assets/answers/ernesto_de_la_cruz.webp",
    "question": "What colour is Ernesto de la Cruz's pristine charro suit?",
    "question_es": "¿De qué color es el impecable traje de charro de Ernesto de la Cruz?",
    "colors": [
      "white"
    ],
    "colors_es": "blanco",
    "explanation": "The famous crooner flaunts a dazzling pearl white mariachi suit adorned with silver sequins.",
    "explanation_es": "El famoso cantante luce un deslumbrante traje de mariachi blanco perla adornado con bordados plateados."
  },
  {
    "id": 19,
    "deck": "pixar",
    "franchise": "Coco",
    "franchise_es": "Coco",
    "logo_url": "assets/logos/coco.svg",
    "logo_url_es": "assets/logos/coco.svg",
    "image_url": "assets/answers/marigold_petals.webp",
    "image_url_es": "assets/answers/marigold_petals.webp",
    "question": "What colour are the Cempasúchil marigold petals leading ancestors home?",
    "question_es": "¿De qué color son los pétalos de cempasúchil que guían a los ancestros a casa?",
    "colors": [
      "orange"
    ],
    "colors_es": "naranja",
    "explanation": "The vibrant Aztec marigold bridge is built out of millions of glowing golden-orange flower petals.",
    "explanation_es": "El puente del Más Allá está construido con millones de brillantes pétalos de cempasúchil naranja dorado."
  },
  {
    "id": 20,
    "deck": "disney",
    "franchise": "Raya and the Last Dragon",
    "franchise_es": "Raya y el Último Dragón",
    "logo_url": "assets/logos/raya.webp",
    "logo_url_es": "assets/logos/raya_es.webp",
    "image_url": "assets/answers/raya_sisu.webp",
    "image_url_es": "assets/answers/raya_sisu.webp",
    "image_position": "center 20%",
    "question": "What two colours make up Sisu the water dragon's body and mane?",
    "question_es": "¿Qué dos colores componen el cuerpo y la melena de Sisu, el último dragón?",
    "colors": [
      "blue",
      "purple"
    ],
    "colors_es": "azul;morado",
    "explanation": "Sisu boasts a sleek blue serpentine body crowned with an undulating lilac-purple mane.",
    "explanation_es": "Sisu posee un elegante cuerpo serpentino azul coronado por una ondeante melena morada."
  },
  {
    "id": 21,
    "deck": "disney",
    "franchise": "Raya and the Last Dragon",
    "franchise_es": "Raya y el Último Dragón",
    "logo_url": "assets/logos/raya.webp",
    "logo_url_es": "assets/logos/raya_es.webp",
    "image_url": "assets/answers/raya_hat.webp",
    "image_url_es": "assets/answers/raya_hat.webp",
    "question": "What colour is Raya's woven conical straw traveler hat?",
    "question_es": "¿De qué color es el sombrero cónico de paja que lleva Raya en sus viajes?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Raya shields herself against Kumandra's climates with her woven natural brown straw salakot.",
    "explanation_es": "Raya se protege en sus travesías por Kumandra con su sombrero salakot tejido de paja marrón natural."
  },
  {
    "id": 22,
    "deck": "pixar",
    "franchise": "Toy Story 4",
    "franchise_es": "Toy Story 4",
    "logo_url": "assets/logos/toy_story_4.webp",
    "logo_url_es": "assets/logos/toy_story_4.webp",
    "image_url": "assets/answers/forky.webp",
    "image_url_es": "assets/answers/forky.webp",
    "image_position": "center 20%",
    "question": "What colour are Forky's twisted pipe cleaner arms?",
    "question_es": "¿De qué color son los brazos de limpiapipas retorcido de Forky?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "Bonnie constructed Forky's arms out of a fuzzy red craft pipe cleaner wrapped around a spork.",
    "explanation_es": "Bonnie construyó los brazos de Forky usando un limpiapipas rojo afelpado alrededor del tenedor."
  },
  {
    "id": 23,
    "deck": "pixar",
    "franchise": "Toy Story 4",
    "franchise_es": "Toy Story 4",
    "logo_url": "assets/logos/toy_story_4.webp",
    "logo_url_es": "assets/logos/toy_story_4.webp",
    "image_url": "assets/answers/duke_caboom.webp",
    "image_url_es": "assets/answers/duke_caboom.webp",
    "question": "What colour is Duke Caboom's maple leaf cape emblem?",
    "question_es": "¿De qué color es el emblema de la hoja de arce en la capa de Duke Caboom?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "Duke Caboom celebrates Canada's greatest stuntman with a bright red Canadian maple leaf on white.",
    "explanation_es": "Duke Caboom rinde homenaje al gran acróbata de Canadá con una hoja de arce roja sobre fondo blanco."
  },
  {
    "id": 24,
    "deck": "pixar",
    "franchise": "Lightyear",
    "franchise_es": "Lightyear",
    "logo_url": "assets/logos/lightyear.webp",
    "logo_url_es": "assets/logos/lightyear.webp",
    "image_url": "assets/answers/sox.webp",
    "image_url_es": "assets/answers/sox.webp",
    "image_position": "center 20%",
    "question": "What colour is Buzz's companion robot cat, Sox?",
    "question_es": "¿De qué color es el gato robot acompañante de Buzz, Sox?",
    "colors": [
      "orange",
      "white"
    ],
    "colors_es": "naranja;blanco",
    "explanation": "Sox is an adorable robotic feline featuring bright marmalade orange plating and giant green eyes.",
    "explanation_es": "Sox es un simpático felino cibernético con placas de color naranja brillante y ojos verdes."
  },
  {
    "id": 25,
    "deck": "pixar",
    "franchise": "Soul",
    "franchise_es": "Soul",
    "logo_url": "assets/logos/soul.webp",
    "logo_url_es": "assets/logos/soul.webp",
    "image_url": "assets/answers/soul_hat.webp",
    "image_url_es": "assets/answers/soul_hat.webp",
    "question": "What colour is jazz musician Joe Gardner's signature fedora hat?",
    "question_es": "¿De qué color es el sombrero fedora característico del músico de jazz Joe Gardner?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Joe never plays piano without his favorite classic warm brown wool jazz fedora.",
    "explanation_es": "Joe nunca toca el piano sin su sombrero fedora de lana marrón cálido favorito."
  },
  {
    "id": 26,
    "deck": "lucasfilm",
    "franchise": "The Mandalorian",
    "franchise_es": "The Mandalorian",
    "logo_url": "assets/logos/the_mandalorian.svg",
    "logo_url_es": "assets/logos/the_mandalorian.svg",
    "image_url": "assets/answers/grogu.webp",
    "image_url_es": "assets/answers/grogu.webp",
    "question": "What two colours are Grogu's skin and oversized fleece robe?",
    "question_es": "¿Qué dos colores tienen la piel de Grogu y su holgada túnica de borrego?",
    "colors": [
      "green",
      "brown"
    ],
    "colors_es": "verde;marrón",
    "explanation": "Grogu has cute wrinkled green skin and ears, paired with his cozy tan/brown fleece coat.",
    "explanation_es": "Grogu tiene piel y orejas verdes arrugaditas, combinadas con un cómodo abrigo de lana beige y marrón."
  },
  {
    "id": 27,
    "deck": "lucasfilm",
    "franchise": "Ahsoka",
    "franchise_es": "Ahsoka",
    "logo_url": "assets/logos/ahsoka.webp",
    "logo_url_es": "assets/logos/ahsoka.webp",
    "image_url": "assets/answers/ahsoka.webp",
    "image_url_es": "assets/answers/ahsoka.webp",
    "question": "What colour are Ahsoka Tano's dual purified lightsaber blades?",
    "question_es": "¿De qué color son las dos hojas de sable de luz purificadas de Ahsoka Tano?",
    "colors": [
      "white"
    ],
    "colors_es": "blanco",
    "explanation": "Ahsoka wields twin purified white plasma blades, symbolizing her independent path.",
    "explanation_es": "Ahsoka empuña dos sables de plasma blanco puro, símbolo de su sendero independiente."
  },
  {
    "id": 28,
    "deck": "marvel",
    "franchise": "Loki",
    "franchise_es": "Loki",
    "logo_url": "assets/logos/loki.webp",
    "logo_url_es": "assets/logos/loki.webp",
    "image_url": "assets/answers/loki_gator.webp",
    "image_url_es": "assets/answers/loki_gator.webp",
    "question": "What colour are the curved horns on Alligator Loki?",
    "question_es": "¿De qué color son los cuernos curvados de Alligator Loki?",
    "colors": [
      "yellow"
    ],
    "colors_es": "amarillo",
    "explanation": "The reptilian variant of the God of Mischief sports a gold helmet with curved yellow horns.",
    "explanation_es": "La variante reptiliana del dios del engaño luce un casco dorado en su hocico con cuernos amarillos."
  },
  {
    "id": 29,
    "deck": "marvel",
    "franchise": "Loki",
    "franchise_es": "Loki",
    "logo_url": "assets/logos/loki.webp",
    "logo_url_es": "assets/logos/loki.webp",
    "image_url": "assets/answers/loki_tva_jumpsuit.webp",
    "image_url_es": "assets/answers/loki_tva_jumpsuit.webp",
    "question": "What colour is the standard TVA jumpsuit jacket Loki must wear?",
    "question_es": "¿De qué color es la chaqueta reglamentaria de la TVA que debe llevar Loki?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Loki is assigned the drab bureaucratic tan/brown trench jacket with orange TVA lettering on back.",
    "explanation_es": "Loki recibe la clásica chaqueta burocrática color marrón tostado con las letras naranjas de la TVA."
  },
  {
    "id": 30,
    "deck": "marvel",
    "franchise": "Moon Knight",
    "franchise_es": "Caballero Luna",
    "logo_url": "assets/logos/moonknight.webp",
    "logo_url_es": "assets/logos/caballero_luna.webp",
    "image_url": "assets/answers/moon_knight_battledress.webp",
    "image_url_es": "assets/answers/moon_knight_battledress.webp",
    "question": "What colour is Marc Spector's mummy-wrap ceremonial battle armor?",
    "question_es": "¿De qué color son las vestiduras ceremoniales de combate de Marc Spector?",
    "colors": [
      "white"
    ],
    "colors_es": "blanco",
    "explanation": "Chosen as the avatar of Khonshu, the Moon Knight summons pure bone-white mystical linen wraps.",
    "explanation_es": "Como avatar de Khonshu, Moon Knight viste místicos vendajes de lino color blanco puro."
  },
  {
    "id": 31,
    "deck": "marvel",
    "franchise": "Ms. Marvel",
    "franchise_es": "Ms. Marvel",
    "logo_url": "assets/logos/ms_marvel.webp",
    "logo_url_es": "assets/logos/ms_marvel.webp",
    "image_url": "assets/answers/ms_marvel_hard_lights.webp",
    "image_url_es": "assets/answers/ms_marvel_hard_lights.webp",
    "question": "What colour are Kamala Khan's cosmic hard-light platforms?",
    "question_es": "¿De qué color son las plataformas de luz sólida cósmica de Kamala Khan?",
    "colors": [
      "purple"
    ],
    "colors_es": "morado",
    "explanation": "Her Great-Grandmother's bangle channels shimmering crystalline purple and fuchsia Noor light.",
    "explanation_es": "El brazalete de su bisabuela canaliza reluciente energía Noor en tonos morados y fucsia cristalinos."
  },
  {
    "id": 32,
    "deck": "disney",
    "franchise": "Zootopia",
    "franchise_es": "Zootopia",
    "logo_url": "assets/logos/zootopia.svg",
    "logo_url_es": "assets/logos/zootopia.svg",
    "image_url": "assets/answers/judy_vest.webp",
    "image_url_es": "assets/answers/judy_vest.webp",
    "question": "What two safety colours make up Judy Hopps' meter maid vest?",
    "question_es": "¿Qué dos colores de seguridad componen el chaleco de parquímetros de Judy Hopps?",
    "colors": [
      "orange",
      "yellow"
    ],
    "colors_es": "naranja;amarillo",
    "explanation": "While handing out 200 parking tickets before noon, Officer Hopps sports a neon orange vest with yellow stripes.",
    "explanation_es": "Mientras reparte 200 multas antes del mediodía, la oficial Hopps viste un chaleco naranja con bandas amarillas."
  },
  {
    "id": 33,
    "deck": "disney",
    "franchise": "Zootopia",
    "franchise_es": "Zootopia",
    "logo_url": "assets/logos/zootopia.svg",
    "logo_url_es": "assets/logos/zootopia.svg",
    "image_url": "assets/answers/nick_wilde_.webp",
    "image_url_es": "assets/answers/nick_wilde_.webp",
    "question": "What colour is Nick Wilde's tie in Zootopia?",
    "question_es": "¿De qué color es la corbata de Nick Wilde en Zootopia?",
    "colors": [
      "blue",
      "red"
    ],
    "colors_es": "azul;rojo",
    "explanation": "The sly con artist fox wears a dark blue-purple striped tie loosely hung around his green shirt.",
    "explanation_es": "El astuto zorro estafador lleva una corbata a rayas moradas sobre su camisa hawaiana verde."
  },
  {
    "id": 34,
    "deck": "disney",
    "franchise": "Big Hero 6",
    "franchise_es": "Big Hero 6",
    "logo_url": "assets/logos/big_hero_6.svg",
    "logo_url_es": "assets/logos/big_hero_6.svg",
    "image_url": "assets/answers/baymax_white.webp",
    "image_url_es": "assets/answers/baymax_white.webp",
    "question": "What colour is Baymax's soft medical vinyl body when unarmored?",
    "question_es": "¿De qué color es el cuerpo de vinilo inflable de Baymax cuando no lleva armadura?",
    "colors": [
      "white"
    ],
    "colors_es": "blanco",
    "explanation": "Hiro's huggable healthcare companion is constructed out of marshmallow-soft pure white vinyl.",
    "explanation_es": "El adorable enfermero robot creado por Tadashi está fabricado en vinilo blanco puro como un malvavisco."
  },
  {
    "id": 35,
    "deck": "disney",
    "franchise": "Big Hero 6",
    "franchise_es": "Big Hero 6",
    "logo_url": "assets/logos/big_hero_6.svg",
    "logo_url_es": "assets/logos/big_hero_6.svg",
    "image_url": "assets/answers/baymax_superhero.webp",
    "image_url_es": "assets/answers/baymax_superhero.webp",
    "question": "What colour is Baymax's upgraded superhero armor suit?",
    "question_es": "¿De qué color es la armadura de superhéroe mejorada de Baymax?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "Hiro equips Baymax with high-gloss crimson red titanium plating to take flight!",
    "explanation_es": "¡Hiro equipa a Baymax con una brillante armadura de titanio color rojo carmesí para volar!"
  },
  {
    "id": 36,
    "deck": "marvel",
    "franchise": "What If...?",
    "franchise_es": "What If...?",
    "logo_url": "assets/logos/what_If.webp",
    "logo_url_es": "assets/logos/what_If.webp",
    "image_url": "assets/answers/what_if_carter.webp",
    "image_url_es": "assets/answers/what_if_carter.webp",
    "question": "What three colours make up Captain Carter's British Union Jack shield?",
    "question_es": "¿Qué tres colores componen el escudo con la Union Jack de Capitana Carter?",
    "colors": [
      "red",
      "white",
      "blue"
    ],
    "colors_es": "rojo;blanco;azul",
    "explanation": "Peggy Carter wields a vibranium shield sporting the United Kingdom's red, white, and royal blue cross.",
    "explanation_es": "Peggy Carter empuña un escudo de vibranium con la cruz británica en rojo, blanco y azul marino."
  },
  {
    "id": 37,
    "deck": "disneychannel",
    "franchise": "Descendants",
    "franchise_es": "Los Descendientes",
    "logo_url": "assets/logos/descendants.webp",
    "logo_url_es": "assets/logos/descendants_es.webp",
    "image_url": "assets/answers/mal.webp",
    "image_url_es": "assets/answers/mal.webp",
    "question": "What colour are Mal's signature leather biker jacket and hair?",
    "question_es": "¿De que color son la icónica cazadora de cuero y el pelo de Mal?",
    "colors": [
      "purple"
    ],
    "colors_es": "morado",
    "explanation": "Daughter of Maleficent, Mal sports signature deep purple leather with lime green dragon accents and purple hair.",
    "explanation_es": "Hija de Maléfica, Mal viste su característico cuero morado con detalles verde lima y cabello morado."
  },
  {
    "id": 38,
    "deck": "disneychannel",
    "franchise": "Descendants 2",
    "franchise_es": "Descendants 2",
    "logo_url": "assets/logos/descendants_2.webp",
    "logo_url_es": "assets/logos/descendants_2_es.webp",
    "image_url": "assets/answers/uma_hair.webp",
    "image_url_es": "assets/answers/uma_hair.webp",
    "question": "What colour are Uma's braided pirate hair and pirate coat?",
    "question_es": "¿De qué color son las trenzas y el abrigo de pirata de Uma en Descendants 2?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Daughter of Ursula, pirate captain Uma rules the Isle of the Lost in vibrant blue braided locks and matching pirate gear.",
    "explanation_es": "Hija de Úrsula, la capitana pirata Uma lidera la Isla de los Perdidos luciendo trenzas y un traje en color azul brillante."
  },
  {
    "id": 39,
    "deck": "disneychannel",
    "franchise": "Descendants 3",
    "franchise_es": "Descendants 3",
    "logo_url": "assets/logos/descendants_3.webp",
    "logo_url_es": "assets/logos/descendants_3_es.webp",
    "image_url": "assets/answers/hades_adult.webp",
    "image_url_es": "assets/answers/hades_adult.webp",
    "question": "What is the colour of the adult hades hair?",
    "question_es": "¿De qué color es el cabello de Hades adulto?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "The Ember of Hades pulses with powerful supernatural blue god flames.",
    "explanation_es": "La brasa mágica del dios del Inframundo arde con poderosas llamas sobrenaturales de color azul."
  },
  {
    "id": 40,
    "deck": "disneychannel",
    "franchise": "Descendants: The Rise of Red",
    "franchise_es": "Los Descendientes: Corazón Rebelde",
    "logo_url": "assets/logos/descendants_4.webp",
    "logo_url_es": "assets/logos/descendants_4_es.webp",
    "image_url": "assets/answers/chloe_red.webp",
    "image_url_es": "assets/answers/chloe_red.webp",
    "question": "What two contrasting colours define Princess Red and Chloe Charming?",
    "question_es": "¿De qué dos colores contrastantes visten la Princesa Red y Chloe Charming?",
    "colors": [
      "blue",
      "red"
    ],
    "colors_es": "azul;rojo",
    "explanation": "Chloe Charming is styled in sparkling royal blue while Red rocks fiery crimson hair and rebel attire.",
    "explanation_es": "Chloe Charming luce un estilo en azul real resplandeciente, mientras que Red destaca con su cabello de un rojo intenso y su atuendo rebelde."
  },
  {
    "id": 41,
    "deck": "disneychannel",
    "franchise": "Descendants: Wicked Wonderland",
    "franchise_es": "Los Descendientes: Viaje al Mundo Oscuro",
    "logo_url": "assets/logos/descendants_5.webp",
    "logo_url_es": "assets/logos/descendants_5_es.webp",
    "image_url": "assets/answers/hazel_hook.webp",
    "image_url_es": "assets/answers/hazel_hook.webp",
    "image_position": "center 20%",
    "question": "What colour of clothes does Hazel Hook wear?",
    "question_es": "¿De qué color es la ropa que viste Hazel Hook?",
    "colors": [
      "red",
      "white"
    ],
    "colors_es": "rojo;blanco",
    "explanation": "Hazel wears a white pirate blouse with a matching crimson vest and skirt pants along with a brown waist belt.",
    "explanation_es": "Hazel lleva una blusa pirata blanca, un chaleco y unos pantalones tipo falda de color carmesí a juego, además de un cinturón marrón a la cintura."
  },
  {
    "id": 42,
    "deck": "pixar",
    "franchise": "Toy Story 5",
    "franchise_es": "Toy Story 5",
    "logo_url": "assets/logos/toy_story_5.webp",
    "logo_url_es": "assets/logos/toy_story_5.webp",
    "image_url": "assets/answers/pixarball.webp",
    "image_url_es": "assets/answers/pixarball.webp",
    "question": "What three colours make up the iconic Pixar Luxo Ball hidden in the Toy Story world?",
    "question_es": "¿Qué tres colores componen la icónica pelota Luxo de Pixar presente en el mundo de Toy Story?",
    "colors": [
      "yellow",
      "blue",
      "red"
    ],
    "colors_es": "amarillo;azul;rojo",
    "explanation": "The legendary Pixar ball features bright yellow and blue body stripes with a central red star.",
    "explanation_es": "La legendaria pelota de Pixar luce bandas amarillas y azul brillante con una estrella central de color rojo."
  },
  {
    "id": 43,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/vamperina.webp",
    "image_url_es": "assets/answers/vamperina.webp",
    "image_position": "center 20%",
    "question": "What colour is friendly young vampire Vee's ghoul skin?",
    "question_es": "¿De qué color es la piel de la simpática joven vampiro Vee (Vampirina)?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Vampirina 'Vee' Hauntley has friendly, pale lavender-blue vampire skin.",
    "explanation_es": "Vampirina 'Vee' Hauntley luce una pálida piel de vampiro color azul lavanda."
  },
  {
    "id": 44,
    "deck": "disneychannel",
    "franchise": "Zombies",
    "franchise_es": "Zombies",
    "logo_url": "assets/logos/zombies.webp",
    "logo_url_es": "assets/logos/zombies.webp",
    "image_url": "assets/answers/zombies_hair.webp",
    "image_url_es": "assets/answers/zombies_hair.webp",
    "question": "What colour hair do all Seabrook zombies naturally have?",
    "question_es": "¿De qué color tienen el pelo todos los zombis de Seabrook por naturaleza?",
    "colors": [
      "green"
    ],
    "colors_es": "verde",
    "explanation": "Zed and all zombies at Seabrook High naturally possess vibrant emerald green hair.",
    "explanation_es": "¡Zed y todos los zombis del instituto Seabrook tienen de forma natural el pelo verde esmeralda!"
  },
  {
    "id": 45,
    "deck": "disneychannel",
    "franchise": "Zombies 2",
    "franchise_es": "Zombies 2",
    "logo_url": "assets/logos/zombies_2.webp",
    "logo_url_es": "assets/logos/zombies_2.webp",
    "image_url": "assets/answers/addison_hair.webp",
    "image_url_es": "assets/answers/addison_hair.webp",
    "question": "What colour is Addison's real, natural hair that she secretly hid under a wig?",
    "question_es": "¿De qué color es el pelo natural que Addison escondía bajo una peluca?",
    "colors": [
      "white"
    ],
    "colors_es": "blanco",
    "explanation": "Addison hid her natural, snow-white hair under a blonde wig until proudly embracing her true self.",
    "explanation_es": "Addison escondía su cabello natural blanco nieve bajo una peluca rubia hasta aceptarse a sí misma con orgullo."
  },
  {
    "id": 46,
    "deck": "disneychannel",
    "franchise": "Zombies 3",
    "franchise_es": "Zombies 3",
    "logo_url": "assets/logos/zombies_3.webp",
    "logo_url_es": "assets/logos/zombies_3.webp",
    "image_url": "assets/answers/alien_hair.webp",
    "image_url_es": "assets/answers/alien_hair.webp",
    "image_position": "center 20%",
    "question": "What colour hair do the extraterrestrial alien visitors have in Zombies 3?",
    "question_es": "¿De qué color es el pelo de los alienígenas que llegan a Seabrook en Zombies 3?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "The telepathic alien crew from outer space all rock electric, shimmering bright blue hair.",
    "explanation_es": "La tripulación alienígena que llega a Seabrook luce un llamativo cabello azul brillante eléctrico."
  },
  {
    "id": 47,
    "deck": "disneychannel",
    "franchise": "Zombies 4 Dawn of the Vampires",
    "franchise_es": "Zombies 4: Un verano entre vampiros",
    "logo_url": "assets/logos/zombies_4.webp",
    "logo_url_es": "assets/logos/zombies_4_es.webp",
    "image_url": "assets/answers/zombies_vampire_eyes.webp",
    "image_url_es": "assets/answers/zombies_vampire_eyes.webp",
    "image_position": "center 20%",
    "question": "What colour do the vampires' eyes glow when activating their supernatural powers?",
    "question_es": "¿De qué color brillan los ojos de los vampiros al activar sus poderes en Zombies 4?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "When the vampire faction taps into their supernatural speed and strength, their eyes flare crimson red.",
    "explanation_es": "Cuando los vampiros liberan su velocidad y fuerza sobrenaturales, sus ojos resplandecen en rojo carmesí."
  },
  {
    "id": 48,
    "deck": "disney",
    "franchise": "Frozen II",
    "franchise_es": "Frozen II",
    "logo_url": "assets/logos/Frozen_2.webp",
    "logo_url_es": "assets/logos/Frozen_2.webp",
    "image_url": "assets/answers/elsa_5th.webp",
    "image_url_es": "assets/answers/elsa_5th.webp",
    "image_position": "center 20%",
    "question": "What colour is Elsa's Fifth Spirit dress revealed during 'Show Yourself' in Ahtohallan?",
    "question_es": "¿De qué color es el vestido del Quinto Espíritu de Elsa revelado en Ahtohallan?",
    "colors": [
      "white"
    ],
    "colors_es": "blanco",
    "explanation": "At the glacier of Ahtohallan, Elsa's transformation reveals a breathtaking diamond-white gown.",
    "explanation_es": "En el glaciar de Ahtohallan, Elsa se transforma luciendo un resplandeciente vestido blanco diamante."
  },
  {
    "id": 49,
    "deck": "disney",
    "franchise": "Moana 2",
    "franchise_es": "Vaiana 2",
    "logo_url": "assets/logos/moana_2.webp",
    "logo_url_es": "assets/logos/moana_2_es.webp",
    "image_url": "assets/answers/maui_blue.webp",
    "image_url_es": "assets/answers/maui_blue.webp",
    "question": "What colour does Maui's magical giant fish hook glow when activated?",
    "question_es": "¿De qué color brilla el anzuelo mágico gigante de Maui cuando se activa?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Maui's giant bone fish hook glows with bright celestial blue energy when he shapeshifts.",
    "explanation_es": "El gigantesco anzuelo de hueso de Maui brilla con energía celestial azul cuando se transforma."
  },
  {
    "id": 50,
    "deck": "disney",
    "franchise": "Zootopia 2",
    "franchise_es": "Zootopia 2",
    "logo_url": "assets/logos/zootopia2.webp",
    "logo_url_es": "assets/logos/zootopia2.webp",
    "image_url": "assets/answers/nick_wilde_pink.webp",
    "image_url_es": "assets/answers/nick_wilde_pink.webp",
    "image_position": "center 20%",
    "question": "What colour is Nick Wilde's relaxed Hawaiian tropical shirt?",
    "question_es": "¿De qué color es la camisa hawaiana informal que viste Nick Wilde?",
    "colors": [
      "pink"
    ],
    "colors_es": "rosa",
    "explanation": "Judy's slick partner Nick Wilde is famously known for his relaxed bright pink Hawaiian shirt.",
    "explanation_es": "El compañero de Judy, Nick Wilde, es famoso por vestir su informal camisa hawaiana rosa."
  },
  {
    "id": 51,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/tulip_webp.webp",
    "image_url_es": "assets/answers/tulip_webp.webp",
    "image_position": "center 20%",
    "question": "In the present-day framing segments where the band reflects on their rise to fame, what distinctive pastel color is Tulip’s hair dyed in her space buns?",
    "question_es": "En los segmentos actuales donde la banda reflexiona sobre su ascenso a la fama, ¿de qué distintivo color pastel lleva teñido el pelo Tulip en sus moños espaciales?",
    "colors": [
      "pink"
    ],
    "colors_es": "rosa",
    "explanation": "Tulip Aoki rocks signature pastel pink space buns as Electric Bloom's lead singer!",
    "explanation_es": "¡Tulip Aoki luce sus característicos moños espaciales en color rosa pastel como líder de Electric Bloom!"
  },
  {
    "id": 52,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/posey_dress.webp",
    "image_url_es": "assets/answers/posey_dress.webp",
    "image_position": "center 20%",
    "question": "What color is the standout dress from Tulip’s closet that she loans to Posey to wear to the school dance in \"How We Danced the Night Away\"?",
    "question_es": "¿De qué color es el llamativo vestido del armario de Tulip que le presta a Posey para el baile escolar en \"How We Danced the Night Away\"?",
    "colors": [
      "yellow"
    ],
    "colors_es": "amarillo",
    "explanation": "Tulip loans Posey a stunning bright yellow dress for the school dance in 'How We Danced the Night Away'.",
    "explanation_es": "¡Tulip le presta a Posey un impresionante vestido amarillo brillante para el baile escolar!"
  },
  {
    "id": 53,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/jade_hair.webp",
    "image_url_es": "assets/answers/jade_hair.webp",
    "image_position": "center 20%",
    "question": "What natural hair color does Jade Castillo have throughout her freshman high school flashbacks?",
    "question_es": "¿Qué color de pelo natural tiene Jade Castillo en los flashbacks de su primer año de instituto?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "Jade Castillo sports natural fiery red hair throughout her freshman year flashbacks before the band hits big.",
    "explanation_es": "¡Jade Castillo luce un cabello pelirrojo natural en los recuerdos de su primer año de instituto!"
  },
  {
    "id": 54,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/tulip_hair.webp",
    "image_url_es": "assets/answers/tulip_hair.webp",
    "image_position": "center 20%",
    "question": "Before styling and dyeing her hair in pink space buns as a global popstar, what natural hair color does Tulip Aoki have when she starts at Edison County High?",
    "question_es": "Antes de peinarse y teñirse el pelo con moños espaciales rosas como estrella del pop mundial, ¿qué color de pelo natural tiene Tulip Aoki cuando empieza en Edison County High?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Before her pop-star pink space buns, Tulip started at Edison County High with natural brown hair.",
    "explanation_es": "¡Antes de sus moños rosas de estrella pop, Tulip comenzó en Edison County High con cabello castaño natural!"
  },
  {
    "id": 55,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/lucas_.webp",
    "image_url_es": "assets/answers/lucas_.webp",
    "image_position": "center 20%",
    "question": "What two colors are Lucas Jasper’s trademark curly tipped hair?",
    "question_es": "¿Qué dos colores componen el característico pelo rizado con puntas teñidas de Lucas Jasper?",
    "colors": [
      "brown",
      "yellow"
    ],
    "colors_es": "marrón;amarillo",
    "explanation": "Lucas Jasper's iconic curly hairdo features natural brown curls highlighted with yellow tips.",
    "explanation_es": "¡El peinado rizado característico de Lucas Jasper combina rizos castaños con puntas amarillas teñidas!"
  },
  {
    "id": 56,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/keyboard.webp",
    "image_url_es": "assets/answers/keyboard.webp",
    "image_position": "center 20%",
    "question": "What two neutral colors make up the classic piano keyboard keys that Jade plays for the band?",
    "question_es": "¿Qué dos colores neutros componen las teclas del clásico teclado de piano que Jade toca para la banda?",
    "colors": [
      "black",
      "white"
    ],
    "colors_es": "negro;blanco",
    "explanation": "Jade plays the keyboard for Electric Bloom with classic alternating black and white piano keys.",
    "explanation_es": "¡Jade toca el teclado para Electric Bloom con las clásicas teclas alternadas en blanco y negro!"
  },
  {
    "id": 57,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/lucas_trousers.webp",
    "image_url_es": "assets/answers/lucas_trousers.webp",
    "image_position": "center 20%",
    "question": "Lucas Jasper’s everyday casual wardrobe usually consists of T-shirts paired with trousers of what color shade?",
    "question_es": "El vestuario informal diario de Lucas Jasper suele consistir en camisetas combinadas con pantalones ¿de qué tono de color?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Lucas Jasper's everyday laid-back style pairs casual graphic tees with earthy brown trousers.",
    "explanation_es": "¡El estilo informal de Lucas Jasper combina camisetas con pantalones en tonos marrones!"
  },
  {
    "id": 58,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/vee_eyes.webp",
    "image_url_es": "assets/answers/vee_eyes.webp",
    "image_position": "center 20%",
    "question": "When Vee taps into her supernatural powers or takes her true vampire form on stage, what color do her eyes distinctively glow?",
    "question_es": "Cuando Vee recurre a sus poderes sobrenaturales o adopta su verdadera forma de vampiro en el escenario, ¿de qué color brillan distintivamente sus ojos?",
    "colors": [
      "purple"
    ],
    "colors_es": "morado",
    "explanation": "When Vee channels her ancient vampire bloodline on stage, her eyes glow with an eerie purple intensity.",
    "explanation_es": "¡Cuando Vee desata su linaje vampírico en el escenario, sus ojos brillan con una intensa luz morada!"
  },
  {
    "id": 59,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/vee_hair.webp",
    "image_url_es": "assets/answers/vee_hair.webp",
    "image_position": "center 20%",
    "question": "What color defines the look of Vee’s hair throughout her time attending Wilson Hall Academy?",
    "question_es": "¿Qué color define el aspecto del cabello de Vee durante todo el tiempo que asistió a Wilson Hall Academy?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Attending Wilson Hall Academy as an undercover teenage student, Vee keeps her hair a natural dark brown.",
    "explanation_es": "¡Como estudiante adolescente en Wilson Hall Academy, Vee mantiene su cabello en un tono castaño oscuro natural!"
  },
  {
    "id": 60,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/vee_finale.webp",
    "image_url_es": "assets/answers/vee_finale.webp",
    "image_position": "center 20%",
    "question": "What two colors dominate Vee’s standout gothic pop-star stage ensemble when she performs as \"Vampirina\" in the Season 1 finale?",
    "question_es": "¿Qué dos colores predominan en el llamativo atuendo gótico de estrella del pop de Vee cuando actúa como \"Vampirina\" en el final de la temporada 1?",
    "colors": [
      "black",
      "purple"
    ],
    "colors_es": "negro;morado",
    "explanation": "Vee's show-stopping gothic rockstar outfit for the Season 1 finale is a dramatic mix of black and purple.",
    "explanation_es": "¡El espectacular atuendo gótico de Vee para el final de la primera temporada es una mezcla dramática de negro y morado!"
  },
  {
    "id": 61,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/demi_ghost.webp",
    "image_url_es": "assets/answers/demi_ghost.webp",
    "image_position": "center 20%",
    "question": "When Demetrius \"Demi\" Montague Philosan appears in his translucent, spectral ghost form, what cool glowing color is he?",
    "question_es": "Cuando Demetrius \"Demi\" Montague Philosan aparece en su forma fantasmal y translúcida, ¿de qué color frío y brillante es?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "Demetrius 'Demi' Montague Philosan manifests in a translucent, ethereal icy blue spectral glow.",
    "explanation_es": "¡Demetrius 'Demi' se manifiesta con un resplandor fantasmal y translúcido en azul hielo espectral!"
  },
  {
    "id": 62,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/logos/vampirina_teenage_vampire.webp",
    "image_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_position": "center",
    "question": "During the lunar eclipse in \"First Halloween\", what color is the Blood Moon that grants Vee her wish to redo the night?",
    "question_es": "Durante el eclipse lunar en \"First Halloween\", ¿de qué color es la Luna de Sangre que le concede a Vee su deseo de repetir la noche?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "During the Halloween lunar eclipse, the eerie crimson red Blood Moon grants Vee her supernatural wish.",
    "explanation_es": "¡Durante el eclipse de Halloween, la siniestra Luna de Sangre roja carmesí le concede su deseo a Vee!"
  },
  {
    "id": 63,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/demi_ghost.webp",
    "image_url_es": "assets/answers/demi_ghost.webp",
    "image_position": "center 20%",
    "question": "If Demi briefly possesses or channels through a student, what color do their pupils and spectral aura temporarily turn?",
    "question_es": "Si Demi posee brevemente o se canaliza a través de un estudiante, ¿de qué color se vuelven temporalmente sus pupilas y su aura espectral?",
    "colors": [
      "blue"
    ],
    "colors_es": "azul",
    "explanation": "When Demi temporarily possesses someone, their eyes and spiritual aura emit a cool blue ghostly hue.",
    "explanation_es": "¡Cuando Demi posee a alguien, sus pupilas y aura espiritual emiten una tonalidad azul fantasmal!"
  },
  {
    "id": 64,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/logos/vampirina_teenage_vampire.webp",
    "image_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_position": "center",
    "question": "What two colors are the classic sharp canine fangs that reveal someone at Wilson Hall is secretly an undead vampire?",
    "question_es": "¿De qué dos colores son los clásicos y afilados colmillos caninos que revelan que alguien en Wilson Hall es secretamente un vampiro no muerto?",
    "colors": [
      "white",
      "red"
    ],
    "colors_es": "blanco;rojo",
    "explanation": "The secret vampires of Wilson Hall can be identified by sharp white canine fangs stained with crimson red.",
    "explanation_es": "¡Los vampiros secretos se revelan por sus afilados colmillos blancos manchados de rojo carmesí!"
  },
  {
    "id": 65,
    "deck": "disneychannel",
    "franchise": "Vampirina: Teenage Vampire",
    "franchise_es": "Una Vampirina adolescente",
    "logo_url": "assets/logos/vampirina_teenage_vampire.webp",
    "logo_url_es": "assets/logos/una_vampirina_adolescente_es.webp",
    "image_url": "assets/answers/van_helsing_ring.webp",
    "image_url_es": "assets/answers/van_helsing_ring.webp",
    "image_position": "center 20%",
    "question": "What metallic finish color is the secret Van Helsing family crest ring worn by Elijah Summers?",
    "question_es": "¿De qué color con acabado metálico es el anillo secreto con el escudo familiar de los Van Helsing que lleva Elijah Summers?",
    "colors": [
      "grey"
    ],
    "colors_es": "gris",
    "explanation": "Elijah Summers wears an heirloom Van Helsing crest ring forged from antique grey silver.",
    "explanation_es": "¡Elijah Summers lleva un anillo con el escudo familiar de los Van Helsing forjado en plata gris antigua!"
  },
  {
    "id": 66,
    "deck": "disneychannel",
    "franchise": "Electric Bloom",
    "franchise_es": "Electric Bloom",
    "logo_url": "assets/logos/electric_bloom.webp",
    "logo_url_es": "assets/logos/electric_bloom.webp",
    "image_url": "assets/answers/jade_spooky.webp",
    "image_url_es": "assets/answers/jade_spooky.webp",
    "image_position": "center 15%",
    "question": "What two colours make up Jade Castillo's spooky skeleton Halloween costume and face paint?",
    "question_es": "¿Qué dos colores componen el disfraz y el maquillaje de esqueleto de Halloween de Jade Castillo?",
    "colors": [
      "black",
      "white"
    ],
    "colors_es": "negro;blanco",
    "explanation": "For Halloween, Jade goes full spooky rockstar in a black jumpsuit with white skeleton bones and skull face paint!",
    "explanation_es": "¡En Halloween, Jade luce un mono negro con huesos de esqueleto blancos y maquillaje de calavera en blanco y negro!"
  },
  {
    "id": 67,
    "deck": "lucasfilm",
    "franchise": "The Mandalorian",
    "franchise_es": "The Mandalorian",
    "logo_url": "assets/logos/the_mandalorian.svg",
    "logo_url_es": "assets/logos/the_mandalorian.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What metallic colour is Din Djarin's polished Beskar Mandalorian helmet and armor?",
    "question_es": "¿De qué color metálico son el casco y la armadura de acero Beskar pulido de Din Djarin?",
    "colors": [
      "grey"
    ],
    "colors_es": "gris",
    "explanation": "Mandalorian bounty hunter Din Djarin wears gleaming silver-grey Beskar alloy armor forged by the Armorer.",
    "explanation_es": "El cazarrecompensas mandaloriano Din Djarin viste una reluciente armadura de aleación Beskar gris plateado."
  },
  {
    "id": 68,
    "deck": "lucasfilm",
    "franchise": "Ahsoka",
    "franchise_es": "Ahsoka",
    "logo_url": "assets/logos/ahsoka.webp",
    "logo_url_es": "assets/logos/ahsoka.webp",
    "image_url": "",
    "image_url_es": "",
    "question": "What two colours are Grand Admiral Thrawn's Chiss skin and pristine Imperial Grand Admiral uniform?",
    "question_es": "¿De qué dos colores son la piel Chiss del Gran Almirante Thrawn y su impecable uniforme imperial?",
    "colors": [
      "blue",
      "white"
    ],
    "colors_es": "azul;blanco",
    "explanation": "Grand Admiral Thrawn is unmistakable with his icy blue skin and crisp white Imperial Grand Admiral tunic.",
    "explanation_es": "El Gran Almirante Thrawn destaca por su piel azul hielo y su impecable uniforme imperial blanco."
  },
  {
    "id": 69,
    "deck": "lucasfilm",
    "franchise": "Star Wars",
    "franchise_es": "Star Wars",
    "logo_url": "assets/logos/lucasfilm.svg",
    "logo_url_es": "assets/logos/lucasfilm.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What two colours define Darth Vader's dark Sith armor and glowing kyber lightsaber blade?",
    "question_es": "¿Qué dos colores definen la armadura oscura de Darth Vader y la hoja brillante de su sable de luz Sith?",
    "colors": [
      "black",
      "red"
    ],
    "colors_es": "negro;rojo",
    "explanation": "Darth Vader is clad in obsidian black life-support armor and wields a crimson red Sith lightsaber.",
    "explanation_es": "Darth Vader viste una imponente armadura negra y empuña un sable de luz Sith rojo carmesí."
  },
  {
    "id": 70,
    "deck": "lucasfilm",
    "franchise": "Star Wars",
    "franchise_es": "Star Wars",
    "logo_url": "assets/logos/lucasfilm.svg",
    "logo_url_es": "assets/logos/lucasfilm.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What two colours make up astromech droid R2-D2's iconic chassis and dome panels?",
    "question_es": "¿Qué dos colores componen el chasis y los paneles de la cúpula del droide astromecánico R2-D2?",
    "colors": [
      "blue",
      "white"
    ],
    "colors_es": "azul;blanco",
    "explanation": "Heroic astromech droid R2-D2 features a white cylindrical body accented with royal blue panels.",
    "explanation_es": "El heroico droide astromecánico R2-D2 tiene un cuerpo cilíndrico blanco con paneles en azul real."
  },
  {
    "id": 71,
    "deck": "lucasfilm",
    "franchise": "Star Wars",
    "franchise_es": "Star Wars",
    "logo_url": "assets/logos/lucasfilm.svg",
    "logo_url_es": "assets/logos/lucasfilm.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What colour is fussy protocol droid C-3PO's polished metallic body plating?",
    "question_es": "¿De qué color es el recubrimiento metálico dorado del droide de protocolo C-3PO?",
    "colors": [
      "yellow"
    ],
    "colors_es": "amarillo",
    "explanation": "Fluent in over six million forms of communication, C-3PO shines in golden-yellow brass plating.",
    "explanation_es": "Fluido en más de seis millones de formas de comunicación, C-3PO brilla con su carcasa amarilla dorada."
  },
  {
    "id": 72,
    "deck": "lucasfilm",
    "franchise": "Star Wars",
    "franchise_es": "Star Wars",
    "logo_url": "assets/logos/lucasfilm.svg",
    "logo_url_es": "assets/logos/lucasfilm.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What colour are both Jedi Grand Master Yoda's skin and his lightsaber blade?",
    "question_es": "¿De qué color son tanto la piel del Gran Maestro Jedi Yoda como la hoja de su sable de luz?",
    "colors": [
      "green"
    ],
    "colors_es": "verde",
    "explanation": "Legendary Jedi Master Yoda has wise green skin and ignites an emerald green lightsaber blade.",
    "explanation_es": "El legendario Maestro Jedi Yoda tiene piel verde y empuña un sable de luz verde esmeralda."
  },
  {
    "id": 73,
    "deck": "lucasfilm",
    "franchise": "Star Wars",
    "franchise_es": "Star Wars",
    "logo_url": "assets/logos/lucasfilm.svg",
    "logo_url_es": "assets/logos/lucasfilm.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What rare colour is Jedi Master Mace Windu's unique lightsaber blade?",
    "question_es": "¿De qué color único es la hoja del sable de luz del Maestro Jedi Mace Windu?",
    "colors": [
      "purple"
    ],
    "colors_es": "morado",
    "explanation": "Mace Windu stands out on the Jedi Council with his unmistakable amethyst purple lightsaber blade.",
    "explanation_es": "Mace Windu destaca en el Consejo Jedi con su inconfundible sable de luz de color morado amatista."
  },
  {
    "id": 74,
    "deck": "lucasfilm",
    "franchise": "Star Wars",
    "franchise_es": "Star Wars",
    "logo_url": "assets/logos/lucasfilm.svg",
    "logo_url_es": "assets/logos/lucasfilm.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What colour is Chewbacca the Wookiee co-pilot's shaggy fur coat?",
    "question_es": "¿De qué color es el tupido pelaje de Chewbacca, el copiloto wookiee del Halcón Milenario?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Han Solo's loyal Wookiee co-pilot Chewbacca is covered head-to-toe in shaggy brown fur.",
    "explanation_es": "El leal copiloto wookiee de Han Solo, Chewbacca, está cubierto de pies a cabeza de pelaje marrón."
  },
  {
    "id": 75,
    "deck": "marvel",
    "franchise": "Captain America",
    "franchise_es": "Capitán América",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What three colours are painted on Captain America's iconic circular Vibranium shield?",
    "question_es": "¿Qué tres colores están pintados en el icónico escudo circular de Vibranium del Capitán América?",
    "colors": [
      "red",
      "white",
      "blue"
    ],
    "colors_es": "rojo;blanco;azul",
    "explanation": "Captain America's Vibranium shield features concentric red and white rings around a white star on a blue center.",
    "explanation_es": "El escudo de Vibranium del Capitán América luce anillos rojos y blancos con una estrella blanca sobre fondo azul."
  },
  {
    "id": 76,
    "deck": "marvel",
    "franchise": "Black Panther",
    "franchise_es": "Black Panther",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What two colours define Black Panther's Vibranium-weave suit and its stored kinetic energy glow?",
    "question_es": "¿Qué dos colores definen el traje de Vibranium de Black Panther y el brillo de su energía cinética?",
    "colors": [
      "black",
      "purple"
    ],
    "colors_es": "negro;morado",
    "explanation": "Shuri's Vibranium habit for the Black Panther is pitch black and glows with violet-purple kinetic energy.",
    "explanation_es": "El traje de Vibranium diseñado por Shuri es negro azabache y brilla con energía cinética morada."
  },
  {
    "id": 77,
    "deck": "marvel",
    "franchise": "She-Hulk: Attorney at Law",
    "franchise_es": "She-Hulk: Abogada Hulka",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What colour do Jennifer Walters and her cousin Bruce Banner turn when they transform into Hulks?",
    "question_es": "¿De qué color se vuelven Jennifer Walters y su primo Bruce Banner cuando se transforman en Hulks?",
    "colors": [
      "green"
    ],
    "colors_es": "verde",
    "explanation": "Gamma radiation transforms lawyer Jennifer Walters and Bruce Banner into powerhouse emerald green Hulks.",
    "explanation_es": "La radiación gamma transforma a Jennifer Walters y a Bruce Banner en colosos de piel verde esmeralda."
  },
  {
    "id": 78,
    "deck": "marvel",
    "franchise": "Iron Man",
    "franchise_es": "Iron Man",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What two hot-rod colours make up Tony Stark's classic Iron Man armor plating?",
    "question_es": "¿Qué dos colores clásicos componen las placas de la armadura de Iron Man de Tony Stark?",
    "colors": [
      "red",
      "yellow"
    ],
    "colors_es": "rojo;amarillo",
    "explanation": "Tony Stark paints his iconic Iron Man suits in hot-rod crimson red and metallic gold-yellow.",
    "explanation_es": "Tony Stark pinta sus icónicas armaduras de Iron Man en rojo carmesí y amarillo dorado metálico."
  },
  {
    "id": 79,
    "deck": "marvel",
    "franchise": "Spider-Man",
    "franchise_es": "Spider-Man",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What two primary colours make up Peter Parker's classic friendly neighborhood Spider-Man suit?",
    "question_es": "¿Qué dos colores primarios componen el traje clásico de Spider-Man de Peter Parker?",
    "colors": [
      "red",
      "blue"
    ],
    "colors_es": "rojo;azul",
    "explanation": "Spider-Man swings through New York in his classic red webbed mask and torso paired with blue suit panels.",
    "explanation_es": "Spider-Man se balancea por Nueva York con su clásico traje rojo con telarañas y paneles azules."
  },
  {
    "id": 80,
    "deck": "marvel",
    "franchise": "WandaVision",
    "franchise_es": "Bruja Escarlata y Visión",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What colour is Wanda Maximoff's glowing Chaos Magic energy and Scarlet Witch crown?",
    "question_es": "¿De qué color son la energía mágica del caos y la corona de la Bruja Escarlata de Wanda Maximoff?",
    "colors": [
      "red"
    ],
    "colors_es": "rojo",
    "explanation": "As the Scarlet Witch, Wanda Maximoff channels glowing crimson red Chaos Magic and wears a red tiara.",
    "explanation_es": "Como la Bruja Escarlata, Wanda Maximoff canaliza magia del caos de color rojo carmesí."
  },
  {
    "id": 81,
    "deck": "marvel",
    "franchise": "Guardians of the Galaxy",
    "franchise_es": "Guardianes de la Galaxia",
    "logo_url": "assets/logos/marvel_studios.svg",
    "logo_url_es": "assets/logos/marvel_studios.svg",
    "image_url": "",
    "image_url_es": "",
    "question": "What colour is Groot's wooden tree-bark body?",
    "question_es": "¿De qué color es el cuerpo de corteza de árbol de Groot?",
    "colors": [
      "brown"
    ],
    "colors_es": "marrón",
    "explanation": "Flora colossus Groot is a sentient tree-like hero made of natural brown wood bark.",
    "explanation_es": "El coloso floral Groot es un héroe arbóreo compuesto de corteza de madera marrón natural."
  }
];
