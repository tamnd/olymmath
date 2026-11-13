---
tag: 99YPGBK44K
kind: problem
type: answer
answer: "955"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a $10 \times 10$ grid table $A$ contain an integer in each cell. Denote the sum of the numbers in the $i$-th row as $s_{i}$, and the sum of the numbers in the $j$-th column as $t_{j}, i, j=1,2, \cdots, 10$. Then fill a new $10 \times 10$ grid table $B$ in the following way: in the cell at the $i$-th row and $j$-th column, write the smaller of $s_{i}$ and $t_{j}$. It is known that the cells in table $B$ can be numbered from 1 to 100 such that the number in the $k$-th cell is no greater than $k$. Find the maximum possible sum of all the numbers in table $A$.
