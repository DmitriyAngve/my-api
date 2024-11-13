import { Response, Request } from "express";

export function listOfItems(req: Request, res: Response) {
  try {
    console.log(req.body);
    res.status(200).json({ message: "List of Items" });
  } catch (e) {
    res.status(500).send(e);
  }
}

export function getItemById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Item found in position ${id}` });
  } catch (e) {
    res.status(500).send(e);
  }
}

export function createItem(req: Request, res: Response) {
  try {
    // const newItem = req.body;
    console.log(req.body);
    res.status(201).json({ message: "create item" });
  } catch (e) {
    res.status(500).send(e);
  }
}

export function updateItem(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Item by number ${id} was updated` });
  } catch (e) {
    res.status(500).send(e);
  }
}

export function deleteItem(req: Request, res: Response) {
  try {
    const { id } = req.params;
    res.status(201).json({ message: `item by number ${id} was deleted` });
  } catch (e) {
    res.status(500).send(e);
  }
}
