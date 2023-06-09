const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const postSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  recordType: { type: String, required: true },
  author: { type: String, required: true },
});

const podcastSchema = new Schema({
  title: { type: String, required: true },
  value: {
    type: String,
    required: true,
  },
});

const moviesSchema = new Schema({
  title: { type: String, required: true },
  value: {
    type: String,
    required: true,
  },
});

const songsSchema = new Schema({
  title: { type: String, required: true },
  value: { type: String, required: true },
});

const recordsSchema = new Schema({
  title: { type: String, required: true },
  value: { type: String, required: true },
});

const Posts = mongoose.model("Posts", postSchema, "posts");
const Register = mongoose.model("Register", registerSchema, "authentication");
const Podcasts = mongoose.model(
  "Podcasts",
  podcastSchema,
  "podcast-categories"
);
const Movies = mongoose.model("Movies", moviesSchema, "movie-categories");
const Songs = mongoose.model("Songs", songsSchema, "song-categories");
const Records = mongoose.model("Records", recordsSchema, "record-types");
// prettier-ignore
const mySchemas = { "Register": Register, "Posts": Posts, "Podcasts": Podcasts, "Movies": Movies, "Songs": Songs, "Records": Records };
module.exports = mySchemas;
