import asyncHandler from "express-async-handler";
import Movie from "../modals/movieModal.js";

const createMovie = asyncHandler(async (req, res) => {
    const {
        title,
        releaseYear,
        duration,
        thumbnail,
        description
    } = req.body;

    const movie = await Movie.create({
        title,
        releaseYear,
        duration,
        thumbnail,
        description
    })

    if (movie) {
        res.status(201).json(movie)
    } else {
        res.status(400).json({status: "FAILED", message: "Invalid Data"});

    }
});



const getAllMovies = asyncHandler(async (req, res) => {
    const Movies = await Movie.find({}).sort({ createdAt: -1 });
    if (Movies) {
        res.json(Movies);
    } else {
        res.status(404).json({status: "FAILED", message: "Movie not found"});

    }
});

const editMovie = asyncHandler(async (req, res) => {
    let _id = req.params.id
    const movie = await Movie.findById(_id);
    if (movie) {
        movie.title = req.body.title || movie.title;
        movie.releaseYear = req.body.releaseYear || movie.releaseYear;
        movie.duration = req.body.duration || movie.duration;
        movie.thumbnail = req.body.thumbnail || movie.thumbnail;
        movie.description = req.body.description || movie.description;


        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } else {
        res.status(404).json({status: "FAILED", message: "Movie not found"});

    }
})

const deleteMovie = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
        await movie.deleteOne();
        res.json({message: 'Movie removed'});
    } else {
        res.status(404).json({status: "FAILED", message: "Movie not found"});
    }
})

export {createMovie,editMovie,getAllMovies,deleteMovie};