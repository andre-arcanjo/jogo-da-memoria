import { teams } from '../../data/teams';

// duplica os times em um novo array

export const duplicatedTeams = teams.map((time) => ({
  ...time,
  id: time.id + 100,
}));