---
tag: JBBMGK1KV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an integer $n \ge 2$ and write the numbers $1, 2, \ldots, n$ down on a board. A move consists in erasing any two numbers $a$ and $b$, then writing down the numbers $a+b$ and $\vert a-b \vert$ on the board, and then removing repetitions (e.g., if the board contained the numbers $2, 5, 7, 8$, then one could choose the numbers $a = 5$ and $b = 7$, obtaining the board with numbers $2, 8, 12$). For all integers $n \ge 2$, determine whether it is possible to be left with exactly two numbers on the board after a finite number of moves.

*Proposed by China*
