import { useEffect, useState } from "react"
import { shuffledCards } from "./hooks/shuffledCards/shuffledCards"

function App() {

  const [cards, setCards] = useState(shuffledCards)
  const [selectedCards, setSelectedCards] = useState<typeof cards>([])
  const [hasWon, setHasWon] = useState(false)

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setHasWon(true)
    }
  }, [cards])

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
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.id === first.id || card.id === second.id) {
              return {
                ...card,
                matched: true
              }
            }
            return card
          })
        })

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
    <div className="min-h-screen space-y-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl">Jogo da Memória</h1>
      <h2 className="sm:text-2xl">Tema: Times Brasileirão Serie <span className="text-green-700">A</span> 2026</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {
          cards.map(time => (
            <button onClick={() => handleCardClick(time.id)} key={time.id} className='flex flex-col items-center gap-3 cursor-pointer'>
              {time.flipped ?
                (
                  <div className="w-32 h-32 bg-gray-200 flex flex-col items-center justify-center gap-2 rounded-lg">
                    <p>{time.name}</p>
                    <img src={time.image} alt={time.name} className='w-14 h-14' />
                  </div>
                ) :
                (
                  <div className="bg-gray-600 w-32 h-32 rounded-lg hover:bg-gray-800">
                  </div>
                )}
            </button>
          ))
        }
        {hasWon && 
        <h1 className="sm:text-2xl">Você venceu! 🎉  <a className="bg-green-700 text-white p-1 rounded-lg hover:bg-green-500 transition-all" href="/">Começar novamente</a></h1>
        }
      </div>
    </div>
  )
}

export default App

//segunda:subir pro git alterações na estilização
// terça: subir projeto versão final
// quarta: fazer readme.md e postar no linkedin
// futuramente: contador de tentativas e cronometro
