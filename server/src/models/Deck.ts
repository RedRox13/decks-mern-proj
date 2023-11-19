import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
	title: String
});

const DeckModel = mongoose.model('Deck', deckSchema);

export default DeckModel;