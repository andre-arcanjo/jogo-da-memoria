import { useState } from "react"
import { shuffledCards } from "./hooks/shuffledCards/shuffledCards"

function App() {

  const [cards, setCards] = useState(shuffledCards)
  const [selectedCards, setSelectedCards] = useState([])

  function handleCardClick(id: number) {

    if (selectedCards.length === 2) return

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

    const clickedCard = updatedCards.find(card => card.id === id)

    const newSelectedCards: any = [...selectedCards, clickedCard]

    setCards(updatedCards)
    setSelectedCards(newSelectedCards)

    if (newSelectedCards.length === 2) {
      const [first, second] = newSelectedCards

      if (first.name === second.name) {
        setSelectedCards([])
      } else {
        setTimeout(() => {
          const resetCards = updatedCards.map(card => {
            if (card.id === first.id || card.id === second.id) {
              return {
                ...card,
                flipped: false
              }
            }
            return card
          })

          setCards(resetCards)
          setSelectedCards([])
        }, 1000)
      }
    }

  }

  return (
    <>
      <div className='flex flex-wrap justify-center gap-16'>
        {
          cards.map(time => (
            <button onClick={() => handleCardClick(time.id)} key={time.id} className='flex flex-col items-center gap-3 cursor-pointer'>
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
