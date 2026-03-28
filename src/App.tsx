import { shuffledCards } from "./hooks/shuffledCards/shuffledCards"

function App() {

  return (
    <>
    <div className='flex flex-wrap justify-center gap-5'>
      {
        shuffledCards.map(time => (
          <div key={time.id} className='flex flex-col items-center gap-3'>
            <p>{time.name}</p>
            <img src={time.image} alt={time.name} className='w-32 h-32' />
          </div>
        ))
      }
      </div>
    </>
  )
}

export default App
