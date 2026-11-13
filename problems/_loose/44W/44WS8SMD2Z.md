---
tag: 44WS8SMD2Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maena and Gaspard are playing a game. Initially, there is a pile of $n$ candies. On their turn, if $a$ denotes the number of remaining candies, the player whose turn it is chooses an integer $b$ such that $1 \leqslant b \leqslant a$ and $b$ is coprime with $a$, then eats $b$ candies. The player who eats the last candy wins.

Given that Maena starts, indicate which of the two players has a winning strategy depending on $n$.
