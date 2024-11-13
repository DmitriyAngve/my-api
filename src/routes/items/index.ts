import { Router } from "express";
import {
  listOfItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "./itemsController";

const router = Router();

router.get("/", listOfItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
