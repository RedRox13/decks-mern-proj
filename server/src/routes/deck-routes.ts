import express from 'express';
import { getDecksController, createDeckController, deleteDeckController } from '../controllers/deckControllers';

const deckRoutes = express.Router();

deckRoutes.get('/decks', getDecksController);
deckRoutes.post('/deck', createDeckController);
deckRoutes.delete('/deck/:deckId', deleteDeckController);

export default deckRoutes;