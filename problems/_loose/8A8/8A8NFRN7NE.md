---
tag: 8A8NFRN7NE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Francophone Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3565982
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: francophone/2025
    source: hf-ai-mo-aops
    label: 2025 Francophone Mathematical Olympiad
---
Let $n \geqslant 2$ be an integer. We consider a square grid of size $2n \times 2n$ divided into $4n^2$ unit squares. The grid is called *balanced* if:

- Each cell contains a number equal to $-1$ , $0$ or $1$ .
- The absolute value of the sum of the numbers in the grid does not exceed $4n$ .

Determine, as a function of $n$ , the smallest integer $k \geqslant 1$ such that any balanced grid always contains an $n \times n$ square whose absolute sum of the $n^2$ cells is less than or equal to $k$ .
