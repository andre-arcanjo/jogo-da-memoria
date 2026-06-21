import { useEffect, useState } from 'react';
import { shuffledCards } from './hooks/shuffledCards/shuffledCards';

function App() {
  // Estado das cartas com propriedades de Id, nome, imagem, se está virada e se foi pareada
  const [cards, setCards] = useState(shuffledCards);
  // Rastreia as duas cartas selecionadas no momento do clique
  const [selectedCards, setSelectedCards] = useState<typeof cards>([]);
  // Controla se o jogador ganhou o jogo
  const [hasWon, setHasWon] = useState(false);

  // Verifica se todas as cartas foram pareadas para determinar se o jogador venceu
  useEffect(() => {
    if (cards.every((card) => card.matched)) {
      // Se todas as cartas têm matched === true, o jogador venceu
      setHasWon(true);
    }
  }, [cards]); // Executa sempre que o estado de cards mudar

  // Função executada quando o jogador clica em uma carta
  function handleCardClick(id: number) {
    // Evita clicar em mais cartas se já há 2 selecionadas
    if (selectedCards.length === 2) return;

    // Encontra a carta clicada pelo ID
    const clickedCard = cards.find((card) => card.id === id);

    // Validações: se a carta não existe ou já foi virada, retorna
    if (!clickedCard) return;
    if (clickedCard?.flipped) return;

    // Atualiza o array de cartas, marcando a carta clicada como virada
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          flipped: true, // Vira a carta
        };
      }
      return card;
    });

    // Adiciona a carta clicada à lista de cartas selecionadas
    const newSelectedCards = [
      ...selectedCards,
      { ...clickedCard, flipped: true },
    ];

    // Atualiza os estados com as cartas viradas e selecionadas
    setCards(updatedCards);
    setSelectedCards(newSelectedCards);

    // Quando 2 cartas foram selecionadas, verifica se são um par
    if (newSelectedCards.length === 2) {
      const [first, second] = newSelectedCards;

      // Verifica se as duas cartas têm o mesmo nome (mesmo time)
      if (first.name === second.name) {
        // ACERTO: marca as duas cartas como pareadas
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === first.id || card.id === second.id) {
              return {
                ...card,
                matched: true, // Marca como pareada permanentemente
              };
            }
            return card;
          });
        });

        // Limpa a seleção para o próximo par
        setSelectedCards([]);
      } else {
        // ERRO: as cartas não combinam, espera 800ms e vira de volta
        setTimeout(() => {
          // Desvira as duas cartas que não deram match
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === first.id || card.id === second.id) {
                return { ...card, flipped: false }; // Vira de volta para baixo
              }
              return card;
            });
          });

          // Limpa a seleção para o próximo par
          setSelectedCards([]);
        }, 800); // 800ms de espera para o jogador ver as cartas antes de virar
      }
    }
  }

  return (
    <div className="min-h-screen space-y-4 flex flex-col justify-center items-center px-2 sm:px-16 2xl:px-2 ">
      <h1 className="text-3xl">Jogo da Memória</h1>
      <h2 className="sm:text-2xl">
        Tema: Times Brasileirão Serie <span className="text-green-700">A</span>{' '}
        2026
      </h2>
      <div className="flex flex-wrap justify-center gap-4 lg:mx-25">
        {cards.map((team) => (
          <button
            onClick={() => handleCardClick(team.id)}
            key={team.id}
            className="flex flex-col items-center cursor-pointer"
          >
            {team.flipped ? (
              <div className="w-16 h-16 sm:w-18 sm:h-18 2xl:w-32 2xl:h-32 bg-gray-200 flex flex-col items-center justify-center gap-2 rounded-lg cursor-default">
                <p className="text-[10px] sm:text-[11.5px] 2xl:text-[16px]">
                  {team.name}
                </p>
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-7 h-7 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14"
                />
              </div>
            ) : (
              <div className="bg-gray-600 w-16 h-16 sm:w-18 sm:h-18 2xl:w-32 2xl:h-32 rounded-lg hover:bg-gray-800"></div>
            )}
          </button>
        ))}
      </div>
      {hasWon && (
        <div className="py-2">
          <h1 className="sm:text-2xl">
            Você venceu! 🎉{' '}
            <a
              className="bg-green-700 text-white p-1 rounded-lg hover:bg-green-500 transition-all"
              href="/jogo-da-memoria/"
            >
              Começar novamente
            </a>
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
