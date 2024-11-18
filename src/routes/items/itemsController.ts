import { Response, Request } from "express";
import { db } from "../../db/index";
import { itemsTable } from "../../db/itemsSchema";
import { eq } from "drizzle-orm";

export async function listOfItems(req: Request, res: Response) {
  try {
    const items = await db.select().from(itemsTable);
    res.json(items);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function getItemById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const [item] = await db
      .select()
      .from(itemsTable)
      .where(eq(itemsTable.id, Number(id)));

    if (!item) {
      res.status(404).send({ message: "Item with this id not found" });
    } else {
      res.json(item);
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function createItem(req: Request, res: Response) {
  try {
    // returning вернет мне массив
    const [item] = await db.insert(itemsTable).values(req.body).returning();
    res.json(item);
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function updateItem(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updatedFields = req.body;

    const [item] = await db
      .update(itemsTable)
      .set(updatedFields)
      .where(eq(itemsTable.id, id))
      .returning();

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item by this id not found" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

export async function deleteItem(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [deletedItem] = await db
      .delete(itemsTable)
      .where(eq(itemsTable.id, id))
      .returning();

    if (deletedItem) {
      res.send({ message: `Item by id ${id} was deleted` });
    } else {
      res.status(404).send({ message: `Item by id ${id} not found` });
    }
  } catch (e) {
    res.status(500).send(e);
  }
}
