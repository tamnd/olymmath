---
tag: K4H6J2EV1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are $n+1$ cells arranged in a row, numbered from left to right as $0,1, \cdots, n$. There are also $n+1$ cards, each labeled with numbers $0,1, \cdots, n$, and each card fits exactly into one cell. After shuffling the cards, place one card in each cell. The ultimate goal of the game is to have the $i$-th card placed in the $i$-th cell, for $i=0,1, \cdots, n$. Before achieving this goal, moves can be made according to the following rule: Determine the smallest natural number $k$ such that the $k$-th cell contains a card labeled with a number $l > k$, then remove this card, and shift the cards from the $(k+1)$-th cell to the $l$-th cell one position to the left, and finally place the $l$-th card into the $l$-th cell. Prove:
(1) The game will stop after at most $2^{n}-1$ moves;
(2) There exists an initial state such that the game stops exactly after $2^{n}-1$ moves.
