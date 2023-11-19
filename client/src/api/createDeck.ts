import { IDeck } from "../interfaces/deck.interface";
import { API_URL } from "./config";

export async function createDeck(title: string): Promise<IDeck> {
  const response = await fetch(`${API_URL}/deck`, {
    method: 'POST',
    body: JSON.stringify({title}),
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  });
  return response.json();
}