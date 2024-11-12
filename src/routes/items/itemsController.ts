import { Response, Request } from "express";

export function listOfItems(req: Request, res: Response) {
  try {
    console.log(req.body);
    res.status(201).json({ message: "Excellent" });
  } catch (e) {
    res.status(500).send(e);
  }
}
