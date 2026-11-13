---
tag: BMV4FAR05R
kind: problem
type: answer
answer: 2^{k}(k\in{N})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n \times n (n \geqslant 2)$ grid, fill it with -1 and +1. The cell at the intersection of the $i$-th row and the $j$-th column is called $(i, j)$, and the cells $(i-1, j)$, $(i+1, j)$, $(i, j-1)$, and $(i, j+1)$ are called the neighbors of $(i, j)$. The addition and subtraction here are performed modulo $n$. A move is defined as replacing the number in each cell $(i, j)$ with the product of its four neighbors. Find all $n$ such that for any $n \times n$ grid, a finite number of moves can make all the numbers in the grid +1.
