---
tag: Z4H2D8G8VP
kind: problem
type: answer
answer: c = -3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some positive integers are initially written on a board, where each $2$ of them are different.
Each time we can do the following moves:
(1) If there are 2 numbers (written in the board) in the form $n, n+1$ we can erase them and write down $n-2$
(2) If there are 2 numbers (written in the board) in the form $n, n+4$ we can erase them and write down $n-1$
After some moves, there might appear negative numbers. Find the maximum value of the integer $c$ such that:
Independetly of the starting numbers, each number which appears in any move is greater or equal to $c$
