import { teams } from "../../data/teams";

export const duplicatedTeams = teams.map(time => ({
    ...time,
    id:time.id + 100,
}))