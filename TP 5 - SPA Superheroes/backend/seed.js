const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/heroes_db')
    .then(() => console.log('Conectado a MongoDB para Seed'))
    .catch(err => console.error('Error de conexión:', err));

const heroSchema = new mongoose.Schema({
    superhero: String,
    publisher: String,
    alter_ego: String,
    first_appearance: String,
    characters: String,
    avatar_url: String,
    images: [String],
    year: Number,
    bio: String,
    equipment: String
});

const Hero = mongoose.model('Hero', heroSchema, 'superheroes');

const heroesData = [
    // --- MARVEL COMICS ---
    { superhero: "Spider-Man", publisher: "Marvel Comics", alter_ego: "Peter Parker", first_appearance: "Amazing Fantasy #15", year: 1962, characters: "Peter Parker", bio: "Mordido por una araña radiactiva, Peter Parker obtuvo habilidades arácnidas.", equipment: "Lanzatelarañas" },
    { superhero: "Iron Man", publisher: "Marvel Comics", alter_ego: "Tony Stark", first_appearance: "Tales of Suspense #39", year: 1963, characters: "Tony Stark", bio: "Billonario, genio, playboy, filántropo con una armadura de alta tecnología.", equipment: "Armadura Mark" },
    { superhero: "Captain America", publisher: "Marvel Comics", alter_ego: "Steve Rogers", first_appearance: "Captain America Comics #1", year: 1941, characters: "Steve Rogers", bio: "Un frágil joven transformado en el soldado perfecto por el suero del Súper Soldado.", equipment: "Escudo de Vibranium" },
    { superhero: "Thor", publisher: "Marvel Comics", alter_ego: "Thor Odinson", first_appearance: "Journey into Mystery #83", year: 1962, characters: "Thor", bio: "El dios del trueno asgardiano, protector de la Tierra.", equipment: "Mjolnir" },
    { superhero: "Hulk", publisher: "Marvel Comics", alter_ego: "Bruce Banner", first_appearance: "The Incredible Hulk #1", year: 1962, characters: "Bruce Banner", bio: "Tras la exposición a rayos gamma, Banner se transforma en un monstruo verde cuando se enoja.", equipment: "Ninguno" },
    { superhero: "Wolverine", publisher: "Marvel Comics", alter_ego: "James Howlett", first_appearance: "The Incredible Hulk #180", year: 1974, characters: "Logan", bio: "Mutante con sentidos agudizados, factor de curación y garras de adamantium.", equipment: "Garras de Adamantium" },
    { superhero: "Black Widow", publisher: "Marvel Comics", alter_ego: "Natasha Romanoff", first_appearance: "Tales of Suspense #52", year: 1964, characters: "Natasha Romanoff", bio: "Ex espía rusa convertida en una de las mejores agentes de S.H.I.E.L.D.", equipment: "Brazaletes Widow's Bite" },
    { superhero: "Doctor Strange", publisher: "Marvel Comics", alter_ego: "Stephen Strange", first_appearance: "Strange Tales #110", year: 1963, characters: "Stephen Strange", bio: "Hechicero Supremo y maestro de las artes místicas.", equipment: "Ojo de Agamotto, Capa de Levitación" },
    { superhero: "Black Panther", publisher: "Marvel Comics", alter_ego: "T'Challa", first_appearance: "Fantastic Four #52", year: 1966, characters: "T'Challa", bio: "Rey y protector de la nación africana tecnológicamente avanzada de Wakanda.", equipment: "Traje de Vibranium" },
    { superhero: "Captain Marvel", publisher: "Marvel Comics", alter_ego: "Carol Danvers", first_appearance: "Marvel Super-Heroes #13", year: 1968, characters: "Carol Danvers", bio: "Ex piloto de la Fuerza Aérea que obtuvo poderes cósmicos tras un accidente Kree.", equipment: "Ninguno" },
    { superhero: "Daredevil", publisher: "Marvel Comics", alter_ego: "Matt Murdock", first_appearance: "Daredevil #1", year: 1964, characters: "Matt Murdock", bio: "Abogado ciego con sentidos súper desarrollados que combate el crimen en Hell's Kitchen.", equipment: "Bastón Billy Club" },
    { superhero: "Deadpool", publisher: "Marvel Comics", alter_ego: "Wade Wilson", first_appearance: "The New Mutants #98", year: 1991, characters: "Wade Wilson", bio: "Mercenario bocazas con un factor de curación acelerado y humor retorcido.", equipment: "Katanas, Armas de fuego" },
    { superhero: "Ghost Rider", publisher: "Marvel Comics", alter_ego: "Johnny Blaze", first_appearance: "Marvel Spotlight #5", year: 1972, characters: "Johnny Blaze", bio: "Motociclista que hizo un trato con el diablo, convirtiéndose en el Espíritu de la Venganza.", equipment: "Cadena mística, Motocicleta Hell Cycle" },
    { superhero: "Hawkeye", publisher: "Marvel Comics", alter_ego: "Clint Barton", first_appearance: "Tales of Suspense #57", year: 1964, characters: "Clint Barton", bio: "Maestro arquero y ex agente de S.H.I.E.L.D.", equipment: "Arco y flechas trucadas" },
    { superhero: "Ant-Man", publisher: "Marvel Comics", alter_ego: "Scott Lang", first_appearance: "Avengers #181", year: 1979, characters: "Scott Lang", bio: "Ladrón reformado que usa un traje que le permite encogerse de tamaño y comunicarse con las hormigas.", equipment: "Traje de Ant-Man, Partículas Pym" },
    { superhero: "Scarlet Witch", publisher: "Marvel Comics", alter_ego: "Wanda Maximoff", first_appearance: "The X-Men #4", year: 1964, characters: "Wanda Maximoff", bio: "Mutante/bruja capaz de alterar la probabilidad y usar la magia del caos.", equipment: "Ninguno" },
    { superhero: "Vision", publisher: "Marvel Comics", alter_ego: "Vision", first_appearance: "The Avengers #57", year: 1968, characters: "Vision", bio: "Sintezoide creado por Ultrón, posee la Gema de la Mente.", equipment: "Gema de la Mente" },
    { superhero: "Star-Lord", publisher: "Marvel Comics", alter_ego: "Peter Quill", first_appearance: "Marvel Preview #4", year: 1976, characters: "Peter Quill", bio: "Aventurero espacial mitad humano y líder de los Guardianes de la Galaxia.", equipment: "Blasters Elementales, Botas propulsoras" },
    { superhero: "Groot", publisher: "Marvel Comics", alter_ego: "Groot", first_appearance: "Tales to Astonish #13", year: 1960, characters: "Groot", bio: "Ser extraterrestre similar a un árbol que solo dice 'Yo soy Groot'.", equipment: "Ninguno" },
    { superhero: "Rocket Raccoon", publisher: "Marvel Comics", alter_ego: "Rocket", first_appearance: "Marvel Preview #7", year: 1976, characters: "Rocket", bio: "Mapache genéticamente modificado, experto en armas y tácticas.", equipment: "Gran arsenal de armas de fuego" },

    // --- DC COMICS ---
    { superhero: "Batman", publisher: "DC Comics", alter_ego: "Bruce Wayne", first_appearance: "Detective Comics #27", year: 1939, characters: "Bruce Wayne", bio: "Tras el asesinato de sus padres, Bruce Wayne juró venganza contra los criminales, entrenándose física y mentalmente.", equipment: "Batarangs, Batmóvil, Cinturón de utilidades" },
    { superhero: "Superman", publisher: "DC Comics", alter_ego: "Kal-El", first_appearance: "Action Comics #1", year: 1938, characters: "Clark Kent", bio: "Nacido en Krypton y criado en la Tierra, usa sus inmensos poderes para proteger su hogar adoptivo.", equipment: "Ninguno" },
    { superhero: "Wonder Woman", publisher: "DC Comics", alter_ego: "Princess Diana", first_appearance: "All Star Comics #8", year: 1941, characters: "Diana Prince", bio: "Princesa guerrera de las Amazonas, dotada de habilidades sobrehumanas por los dioses.", equipment: "Lazo de la Verdad, Brazaletes de Sumisión" },
    { superhero: "Flash", publisher: "DC Comics", alter_ego: "Barry Allen", first_appearance: "Showcase #4", year: 1956, characters: "Barry Allen", bio: "Investigador forense que obtuvo súper velocidad tras ser alcanzado por un rayo y químicos.", equipment: "Traje de fricción" },
    { superhero: "Green Lantern", publisher: "DC Comics", alter_ego: "Hal Jordan", first_appearance: "Showcase #22", year: 1959, characters: "Hal Jordan", bio: "Piloto de pruebas elegido por un anillo de poder alienígena para unirse a una fuerza policial intergaláctica.", equipment: "Anillo de Poder" },
    { superhero: "Aquaman", publisher: "DC Comics", alter_ego: "Arthur Curry", first_appearance: "More Fun Comics #73", year: 1941, characters: "Arthur Curry", bio: "Rey de Atlantis con la habilidad de comunicarse con la vida marina y fuerza sobrehumana.", equipment: "Tridente de Neptuno" },
    { superhero: "Cyborg", publisher: "DC Comics", alter_ego: "Victor Stone", first_appearance: "DC Comics Presents #26", year: 1980, characters: "Victor Stone", bio: "Atleta cibernéticamente mejorado tras un trágico accidente, integrado con tecnología alienígena.", equipment: "Cuerpo cibernético, Cañón sónico" },
    { superhero: "Martian Manhunter", publisher: "DC Comics", alter_ego: "J'onn J'onzz", first_appearance: "Detective Comics #225", year: 1955, characters: "John Jones", bio: "El último superviviente de Marte con poderes de telepatía, cambio de forma y vuelo.", equipment: "Ninguno" },
    { superhero: "Green Arrow", publisher: "DC Comics", alter_ego: "Oliver Queen", first_appearance: "More Fun Comics #73", year: 1941, characters: "Oliver Queen", bio: "Billonario playboy que se convierte en un vigilante arquero tras quedar varado en una isla.", equipment: "Arco y flechas de trucos" },
    { superhero: "Nightwing", publisher: "DC Comics", alter_ego: "Dick Grayson", first_appearance: "Tales of the Teen Titans #44", year: 1984, characters: "Dick Grayson", bio: "El primer Robin de Batman, quien luego adoptó su propia identidad como héroe independiente en Blüdhaven.", equipment: "Bastones de Escrima" },
    { superhero: "Batgirl", publisher: "DC Comics", alter_ego: "Barbara Gordon", first_appearance: "Detective Comics #359", year: 1967, characters: "Barbara Gordon", bio: "Hija del Comisionado Gordon y aliada de Batman. Más tarde conocida como Oráculo.", equipment: "Batarangs, Grapnel" },
    { superhero: "Supergirl", publisher: "DC Comics", alter_ego: "Kara Zor-El", first_appearance: "Action Comics #252", year: 1959, characters: "Kara Danvers", bio: "Prima de Superman, compartiendo sus mismos poderes debido al sol amarillo de la Tierra.", equipment: "Ninguno" },
    { superhero: "Shazam", publisher: "DC Comics", alter_ego: "Billy Batson", first_appearance: "Whiz Comics #2", year: 1940, characters: "Billy Batson", bio: "Un niño que al decir la palabra mágica 'SHAZAM' se transforma en un poderoso campeón mágico.", equipment: "Magia de los dioses" },
    { superhero: "Zatanna", publisher: "DC Comics", alter_ego: "Zatanna Zatara", first_appearance: "Hawkman #4", year: 1964, characters: "Zatanna", bio: "Ilusionista teatral que también es una hechicera real, lanzando hechizos hablando al revés.", equipment: "Varita mágica" },
    { superhero: "Black Canary", publisher: "DC Comics", alter_ego: "Dinah Lance", first_appearance: "Flash Comics #86", year: 1947, characters: "Dinah Lance", bio: "Luchadora experta en artes marciales con un grito sónico mutante.", equipment: "Grito del Canario" },
    { superhero: "Hawkman", publisher: "DC Comics", alter_ego: "Carter Hall", first_appearance: "Flash Comics #1", year: 1940, characters: "Carter Hall", bio: "Reencarnación de un príncipe egipcio que usa el metal Nth para desafiar la gravedad.", equipment: "Alas de metal Nth, Maza" },
    { superhero: "Doctor Fate", publisher: "DC Comics", alter_ego: "Kent Nelson", first_appearance: "More Fun Comics #55", year: 1940, characters: "Kent Nelson", bio: "Arqueólogo que encontró el Casco de Nabu, convirtiéndose en un poderoso agente del Orden.", equipment: "Casco de Fate, Amuleto de Anubis" },
    { superhero: "Blue Beetle", publisher: "DC Comics", alter_ego: "Jaime Reyes", first_appearance: "Infinite Crisis #3", year: 2006, characters: "Jaime Reyes", bio: "Un adolescente que se une a un escarabajo alienígena que le proporciona una armadura poderosa.", equipment: "Armadura de Escarabajo" },
    { superhero: "Plastic Man", publisher: "DC Comics", alter_ego: "Patrick O'Brian", first_appearance: "Police Comics #1", year: 1941, characters: "Eel O'Brian", bio: "Ex criminal que adquirió poderes elásticos y cambiaformas tras caer en químicos.", equipment: "Ninguno" },
    { superhero: "Joker", publisher: "DC Comics", alter_ego: "Desconocido", first_appearance: "Batman #1", year: 1940, characters: "Joker", bio: "El Príncipe Payaso del Crimen, archienemigo de Batman y creador de caos en Gotham.", equipment: "Veneno Joker, Artilugios letales de broma" }
];

async function seedDatabase() {
    try {
        await Hero.deleteMany({}); // Limpiar colección actual
        console.log("Colección limpiada");

        // Añadir avatares con URLs corregidas según el patrón de yoolk.ninja
        const heroesWithAvatars = heroesData.map(hero => {
            const isMarvel = hero.publisher === "Marvel Comics";
            const prefix = isMarvel ? "Marvel" : "Dc";
            const cleanName = hero.superhero.replace(/ /g, '-').replace(/-/g, ''); // Spiderman, IronMan, etc.
            
            // Patrón común en yoolk para los principales
            let url = `https://yoolk.ninja/wp-content/uploads/2019/07/${prefix}-${cleanName}.png`;
            
            // Ajustes específicos para nombres que fallan el patrón común
            if (hero.superhero === "Spider-Man") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Spiderman-1.png";
            if (hero.superhero === "Iron Man") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Iron-Man.png";
            if (hero.superhero === "Superman") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Dc-Superman-1.png";
            if (hero.superhero === "Wonder Woman") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Dc-Wonder-Woman.png";
            if (hero.superhero === "Hulk") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Hulk.png";
            if (hero.superhero === "Thor") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Thor.png";
            if (hero.superhero === "Flash") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Dc-Flash.png";
            if (hero.superhero === "Green Lantern") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Dc-Green-Lantern.png";
            if (hero.superhero === "Wolverine") url = "https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Wolverine.png";
            if (hero.superhero === "Martian Manhunter") url = "https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Martian-Manhunter-2.png";

            return {
                ...hero,
                avatar_url: url,
                images: [
                    url,
                    `https://via.placeholder.com/800x400?text=${encodeURIComponent(hero.superhero)}+Panel+2`,
                    `https://via.placeholder.com/800x400?text=${encodeURIComponent(hero.superhero)}+Panel+3`
                ]
            };
        });

        await Hero.insertMany(heroesWithAvatars);
        console.log(`¡Seed completado! Se insertaron ${heroesWithAvatars.length} héroes.`);
    } catch (error) {
        console.error("Error sembrando la base de datos:", error);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();
