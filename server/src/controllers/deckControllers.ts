import DeckModel from "../models/Deck";
import { Request, Response } from 'express';

export async function getDecksController(req: Request, res: Response) {
  const allDecks = await DeckModel.find();
  res.json(allDecks);
}

export async function createDeckController(req: Request, res: Response) {
  const newDeck = new DeckModel({
    title: req.body.title
  });
  const savedDeck = await newDeck.save();
  res.json(savedDeck);
}

export async function deleteDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deletedDeck = await DeckModel.findByIdAndDelete(deckId);
  res.json(deletedDeck);
}