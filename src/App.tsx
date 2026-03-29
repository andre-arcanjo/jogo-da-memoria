import { useState } from "react"
import { shuffledCards } from "./hooks/shuffledCards/shuffledCards"

function App() {

  const [cards, setCards] = useState(shuffledCards)

  function virarCartas(id: number) {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return {
          ...card,
          flipped: !card.flipped
        }
      }
      return card;
    })

    setCards(updatedCards)
  }

  return (
    <>
      <div className='flex flex-wrap justify-center gap-16'>
        {
          cards.map(time => (
            <button onClick={() => virarCartas(time.id)} key={time.id} className='flex flex-col items-center gap-3 cursor-pointer'>
              {time.flipped ?
                (
                  <div className="w-32 h-32 flex flex-col items-center justify-center">
                    <p>{time.name}</p>
                    <img src={time.image} alt={time.name} className='w-16 h-16' />
                  </div>
                ) : 
                (
                <div className="bg-gray-600 w-32 h-32 rounded-lg">
                </div>
                )}
            </button>
          ))
        }
      </div>
    </>
  )
}

export default App
