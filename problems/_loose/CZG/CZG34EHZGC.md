---
tag: CZG34EHZGC
kind: problem
type: answer
answer: 0,-1(\operatorname{mod}4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 2$, two players, A and B, play a coin game: at the beginning, A chooses a permutation of $1,2, \cdots, n$ and writes them in a row on a piece of paper. Then, B selects one of the numbers and places a coin on this number. Next, A moves the coin to an adjacent position, and then B also moves the coin to an adjacent position, with each round proceeding in this manner. For each integer $k$ in $1,2, \cdots, n$, starting from B's first move, the coin can be placed on the number $k$ at most $k$ times. The player who cannot move the coin loses. For what value of $n$ does A have a winning strategy?
