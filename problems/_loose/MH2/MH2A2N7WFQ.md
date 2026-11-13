---
tag: MH2A2N7WFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three players: $A, B$, and $C$ play the following game: on each of three cards, an integer is written. For these three numbers ($p, q$, and $r$), it holds that $0<\mathrm{p}<\mathrm{q}<\mathrm{r}$.

The cards are shuffled and then distributed so that each player gets one. Then, the players are given as many marbles as the number on their card. After that, the cards are collected, but the marbles remain with the players.

This game (shuffling the cards, distributing them, giving the marbles, and collecting the cards) is played at least twice. After the last round, $A$ has 20, $B$ has 10, and $C$ has 9 marbles. Additionally, $B$ knows that in the last round, they received $r$ marbles.

Who received $q$ marbles for the first time?
