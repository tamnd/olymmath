---
tag: 7X9J5ENFF1
kind: problem
type: answer
answer: "512"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The MathMatters competition consists of 10 players $P_1$, $P_2$, $\dots$, $P_{10}$ competing in a ladder-style tournament. Player $P_{10}$ plays a game with $P_9$: the loser is ranked 10th, while the winner plays $P_8$. The loser of that game is ranked 9th, while the winner plays $P_7$. They keep repeating this process until someone plays $P_1$: the loser of that final game is ranked 2nd, while the winner is ranked 1st. How many different rankings of the players are possible?
