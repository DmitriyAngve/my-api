import { Router } from "express";
import { listOfItems, getItemById, createItem } from "./itemsController";

const router = Router();

router.get("/", listOfItems);
router.get("/:id", getItemById);
router.post("/", createItem);

export default router;
