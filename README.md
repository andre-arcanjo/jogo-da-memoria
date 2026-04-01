# Jogo da Memoria - Times do Brasileirao Serie A 2026

Aplicação web de jogo da memória desenvolvida com React, TypeScript e Vite, utilizando escudos dos times do Brasileirão Série A 2026 como tema.

## Demo

Confira o jogo rodando em: https://andre-arcanjo.github.io/jogo-da-memoria/  

## Tecnologias

- React (biblioteca para construção da interface)
- TypeScript (tipagem estática)
- Vite (build tool e ambiente de desenvolvimento)
- Tailwind CSS (estilização)

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

- O tabuleiro contém pares de cartas (cada time aparece duas vezes).
- O jogador pode virar até duas cartas por jogada.
- Se as cartas forem iguais, permanecem visíveis.
- Caso contrário, elas são viradas novamente após um pequeno intervalo.
- O jogo termina quando todos os pares são encontrados.

## Estrutura principal

```text
src/
  App.tsx                           # lógica principal do jogo e interface
  data/teams.ts                     # lista base de times/cartas
  hooks/duplicatedTeams/            # duplica as cartas para formar pares
  hooks/allCards/                   # combina listas de cartas
  hooks/shuffledCards/              # embaralha as cartas
  style/globals.css                 # import do Tailwind
public/                             # imagens dos escudos
```

## Melhorias futuras

- Contador de jogadas
- Cronômetro de tempo
- Efeitos sonoros
