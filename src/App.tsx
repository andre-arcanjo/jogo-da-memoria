import { useState } from "react"
import { shuffledCards } from "./hooks/shuffledCards/shuffledCards"

function App() {

  const [cards, setCards] = useState(shuffledCards)
  const [selectedCards, setSelectedCards] = useState<typeof cards>([])

  function handleCardClick(id: number) {

    if (selectedCards.length === 2) return

    const clickedCard = cards.find(card => card.id === id)

    if (!clickedCard) return
    if (clickedCard?.flipped) return

    const updatedCards = cards.map(card => {

      if (card.id === id) {
        return {
          ...card,
          flipped: true
        }
      }
      return card;
    })

    const newSelectedCards = [...selectedCards, { ...clickedCard, flipped: true }]

    setCards(updatedCards)
    setSelectedCards(newSelectedCards)

    if (newSelectedCards.length === 2) {
      const [first, second] = newSelectedCards

      if (first.name === second.name) {
        setSelectedCards([])
      } else {
        setTimeout(() => {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.id === first.id || card.id === second.id) {
                return { ...card, flipped: false }
              }
              return card
            })
          })

          setSelectedCards([])
        }, 800)
      }
    }

  }

  return (
    <>
      <div className='min-h-screen flex flex-wrap justify-center gap-6'>
        {
          cards.map(time => (
            <button onClick={() => handleCardClick(time.id)} key={time.id} className='flex flex-col items-center gap-3 cursor-pointer'>
              {time.flipped ?
                (
                  <div className="w-32 h-32 flex flex-col items-center justify-center gap-2">
                    <p>{time.name}</p>
                    <img src={time.image} alt={time.name} className='w-14 h-14' />
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
