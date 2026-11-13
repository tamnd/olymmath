---
tag: ZHWE0ERMKF
kind: problem
type: answer
answer: n(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an odd number $n \geqslant 3$. A game is played on an $n \times n$ grid. The game consists of $n^{2}$ steps, each step following these rules:
(1) Choose an empty cell and fill it with a positive integer that is no less than 1 and no more than $n^{2}$. Each positive integer can only be used once throughout the process;
(2) In the grid, if the sum of all numbers in the row or column where the filled number is located is a multiple of $n$, then 1 point is scored. If the sum of all numbers in both the row and column where the filled number is located are multiples of $n$, then 2 points are scored.
Find the highest score that can be achieved by completing this game.
