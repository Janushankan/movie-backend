import express from 'express';
import {createMovie, deleteMovie, editMovie, getAllMovies} from "../controllers/movieController.js";

const router = express.Router();

router.route('/movies').get(getAllMovies);
router.route('/movie/:id').put(editMovie).delete(deleteMovie);
router.route('/movie').post(createMovie);

export default router;