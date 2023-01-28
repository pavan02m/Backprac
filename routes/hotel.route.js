import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.controller.js";
const router = express.Router();

//create
router.post("/",createHotel);

//delete
router.delete("/:id",deleteHotel);

//update
router.put("/:id",updateHotel);

// get
router.get("/:id",getHotel);

// get all
router.get("",getAllHotel);

export default router;