const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB
// 'mongodb' is the service name we'll define in docker-compose.yml
// Docker Compose automatically resolves this to the right container
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mininetflix';

mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Define a Movie schema (structure of our data)
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
  thumbnail: String,
  video: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// Seed movies into database on startup
async function seedMovies() {
  const count = await Movie.countDocuments();
  if (count === 0) {
    await Movie.insertMany([
      {
        title: "Big Buck Bunny",
        genre: "Animation",
        year: 2008,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/220px-Big_buck_bunny_poster_big.jpg",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        title: "Elephant Dream",
        genre: "Sci-Fi",
        year: 2006,
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elephants_Dream_s5_both.jpg/220px-Elephants_Dream_s5_both.jpg",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      },
      {
        title: "For Bigger Blazes",
        genre: "Action",
        year: 2013,
        thumbnail: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      },
      {
        title: "Subaru Outback",
        genre: "Documentary",
        year: 2013,
        thumbnail: "https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
      }
    ]);
    console.log('🎬 Movies seeded into database');
  }
}

// API to get all movies from database
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

app.listen(PORT, async () => {
  await seedMovies();
  console.log(`🎬 Mini Netflix running at http://localhost:${PORT}`);
});