import { allCards } from '../allCards/allCards';

// embaralha o array

export const shuffledCards = allCards.sort(() => Math.random() - 0.5);
