import { useEffect, useState } from 'react'
import './App.css'
import { IDeck } from './interfaces/deck.interface';
import { Link } from "react-router-dom";
import { getDecks } from './api/getDecks';
import { deleteDeck } from './api/deleteDeck';
import { createDeck } from './api/createDeck';

function App() {
  const [title, setTitle] = useState('');
  const [decks, setDecks] = useState<IDeck[]>([]);

  useEffect(() => {
    async function fetchDecks() {
      const decks = await getDecks();
      setDecks(decks);
    }
    fetchDecks();
  }, []);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDeck(title);
    setDecks([...decks, deck]);
    setTitle('');
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  return (
    <div className='App'>
      <ul className="decks">
        {
          decks.map((deck) => (
            <li key={deck._id}>
              <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
              <Link to={`deck/${deck._id}`} className='link'>
                {deck.title}
              </Link>
            </li>
          ))
        }
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor='deck-title'>Deck title:</label>
        <input id='deck-title'
               type="text"
               value={title}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
        }/>
        <button>Create deck</button>
      </form>
    </div>
  )
}

export default App
