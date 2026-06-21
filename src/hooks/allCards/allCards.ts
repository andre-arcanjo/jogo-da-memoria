import { teams } from '../../data/teams';
import { duplicatedTeams } from '../duplicatedTeams/duplicatedTeams';

// junta o array original com o duplicado

export const allCards = [...teams, ...duplicatedTeams];