import { IDeck } from "../interfaces/deck.interface";
import { API_URL } from "./config";

export async function getDecks(): Promise<IDeck[]> {
  const repsonse = await fetch(`${API_URL}/decks`, {method: 'GET'});
  return repsonse.json();
}