---
tag: RX647E6CWN
kind: problem
type: answer
answer: 2^{39}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each square of a $5 \times 5$ board one of the numbers $2, 3, 4$ or $5$ is written so that the the sum of all the numbers in each row, in each column and on each diagonal is always even. How many ways can we fill the board?

Clarification. A $5\times 5$ board has exactly $18$ diagonals of different sizes. In particular, the corners are size $ 1$ diagonals.
