const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB (usando el nombre del servicio 'db' definido en docker-compose)
mongoose.connect('mongodb://db:27017/heroes_db')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión:', err));

// Definición del Esquema según la PRÁCTICA #6
const heroSchema = new mongoose.Schema({
    superhero: String,      // Nombre del héroe
    publisher: String,      // DC Comics o Marvel Comics
    alter_ego: String,      // Identidad secreta
    first_appearance: String, // Cómic de debut
    characters: String,     // Otros personajes
    avatar_url: String,     // Link principal
    images: [String],       // Array de imágenes para el carrusel
    year: Number,           // Año de aparición
    bio: String,            // Breve biografía
    equipment: String       // Equipamiento (si tiene)
});

const Hero = mongoose.model('Hero', heroSchema, 'superheroes');

// Endpoint para obtener todos los héroes
app.get('/api/heroes', async (req, res) => {
    const heroes = await Hero.find();
    res.json(heroes);
});

// Endpoint para agregar un héroe (Punto 2 de la práctica)
app.post('/api/heroes', async (req, res) => {
    const newHero = new Hero(req.body);
    await newHero.save();
    res.json(newHero);
});

// Endpoint para obtener un héroe por ID
app.get('/api/heroes/:id', async (req, res) => {
    try {
        const hero = await Hero.findById(req.params.id);
        if (!hero) return res.status(404).json({ message: 'Héroe no encontrado' });
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Endpoint para actualizar un héroe
app.put('/api/heroes/:id', async (req, res) => {
    try {
        const updatedHero = await Hero.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHero) return res.status(404).json({ message: 'Héroe no encontrado' });
        res.json(updatedHero);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Endpoint para eliminar un héroe
app.delete('/api/heroes/:id', async (req, res) => {
    try {
        const deletedHero = await Hero.findByIdAndDelete(req.params.id);
        if (!deletedHero) return res.status(404).json({ message: 'Héroe no encontrado' });
        res.json({ message: 'Héroe eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(3000, () => console.log('Backend corriendo en puerto 3000'));