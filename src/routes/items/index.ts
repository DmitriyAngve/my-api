import { Router } from "express";
import { listOfItems } from "./itemsController";

const router = Router();

router.get("/", listOfItems);

export default router;
