import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})



const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
