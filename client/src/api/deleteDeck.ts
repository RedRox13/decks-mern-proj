import { IDeck } from "../interfaces/deck.interface";
import { API_URL } from "./config";

export async function deleteDeck(deckId: string): Promise<IDeck> {
  const repsonse = await fetch(`${API_URL}/deck/${deckId}`, {
    method: 'DELETE'
  });
  return repsonse.json();
}