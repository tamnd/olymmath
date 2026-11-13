---
tag: R30TFD22VA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Every square of $1000 \times 1000$ board is colored black or white. It is known that exists one square $10 \times 10$ such that all squares inside it are black and one square $10 \times 10$ such that all squares inside are white. For every square $K$ $10 \times 10$ we define its power $m(K)$ as an absolute value of difference between number of white and black squares $1 \times 1$ in square $K$. Let $T$ be a square $10 \times 10$ which has minimum power among all squares $10 \times 10$ in this board. Determine maximal possible value of $m(T)$
