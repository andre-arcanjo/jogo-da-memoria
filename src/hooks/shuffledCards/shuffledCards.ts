import { allCards } from "../allCards/allCards"

export const shuffledCards = allCards.sort(() => Math.random() - 0.5)