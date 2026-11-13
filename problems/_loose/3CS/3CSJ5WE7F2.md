---
tag: 3CSJ5WE7F2
kind: problem
type: answer
answer: "97"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $100 \times 25$ rectangular table, each cell is filled with a non-negative real number, with the number in the $i$-th row and $j$-th column being $x_{i, j}(i=1,2, \cdots, 100 ; j=1,2, \cdots, 25)$ (Table 1). Then, the numbers in each column of Table 1 are rearranged in descending order from top to bottom as $x_{1, j}^{\prime} \geqslant x_{2, j}^{\prime} \geqslant \cdots \geqslant x_{100, j}^{\prime}(j=1,2, \cdots, 25)$ (Table 2). Find the smallest natural number $k$ such that if the numbers in Table 1 satisfy $\sum_{j=1}^{25} x_{i, j} \leqslant 1(i=1,2, \cdots, 100)$, then when $i \geqslant k$, in Table 2, $\sum_{j=1}^{25} x_{i, j}^{\prime} \leqslant 1(i=1,2, \cdots, 100)$ holds.
