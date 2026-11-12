---
tag: 57QK1KFKWE
kind: problem
type: answer
answer: First
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56529
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the middle cell of a strip $1 \times 2005$, a chip is placed. Two players take turns moving it: the first player moves the chip one cell in any direction, then the second moves it two cells, the first - four cells, the second - eight cells, and so on (the $k$-th move is made by $2^{k-1}$ cells). The player who cannot make the next move loses. Who can win regardless of the opponent's play?
