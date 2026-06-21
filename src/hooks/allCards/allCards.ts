import { teams } from '../../data/teams';
import { duplicatedTeams } from '../duplicatedTeams/duplicatedTeams';

export const allCards = [...teams, ...duplicatedTeams];
