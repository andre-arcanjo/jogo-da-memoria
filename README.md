# Jogo da Memoria - Times do Brasileirao Serie A 2026

Aplicacao web de jogo da memoria feita com React + TypeScript + Vite.

O tema atual usa escudos de times do Brasileirao Serie A 2026.

## Demo

Confira o jogo rodando em: https://andre-arcanjo.github.io/jogo-da-memoria/  

## Tecnologias

- React
- TypeScript
- Tailwind CSS 

## Como rodar localmente

1. Instale as dependencias:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador (normalmente):

```text
http://localhost:5173
```

## Regras do jogo

- O tabuleiro possui pares de cartas (cada time aparece 2 vezes).
- O jogador pode virar ate 2 cartas por vez.
- Se o par for igual, as cartas ficam marcadas como encontradas.
- Se forem diferentes, as cartas voltam apos um pequeno delay.
- Quando todos os pares sao encontrados, aparece a mensagem de vitoria.

## Estrutura principal

```text
src/
  App.tsx                           # logica principal do jogo e interface
  data/teams.ts                     # lista base de times/cartas
  hooks/duplicatedTeams/            # duplica as cartas para formar pares
  hooks/allCards/                   # combina listas de cartas
  hooks/shuffledCards/              # embaralha as cartas
  style/globals.css                 # import do Tailwind
public/                             # imagens dos escudos
```
