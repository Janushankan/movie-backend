import express from "express";
import movieRoutes from "./movieRoutes.js";

const router = express.Router();

router.use("/api", movieRoutes);

export default router;