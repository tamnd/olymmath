---
tag: 55GYZX0CSQ
kind: problem
type: answer
answer: "210"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eugenia's phone PIN is composed of 4 digits; Eugenia only remembers that the first is between 0 and 6, the second between 0 and 3, the third between 0 and 4, the fourth between 0 and 2, and that the sum of the four digits is at least 8 (for example, the PIN could be 3330). How many codes are compatible with Eugenia's memories?

Let $m, n$ be integers greater than or equal to 2. In a table with $m$ rows and $n$ columns, it is known that each cell contains either the number 1 or the number -1, and that the total sum of all cells is greater than or equal to zero. Genoveffa considers the paths that connect a cell in the first column (of her choice) to a cell in the last column (again of her choice) and that move from one cell to an adjacent one horizontally or vertically, without passing through the same cell twice. The value of a path is the sum of the numbers in the cells it crosses.

(a) Prove that for every $m, n \geq 2$ there exist tables with $m$ rows and $n$ columns without paths of value 2 or more.

(b) Prove that it is always possible to find a path of value greater than or equal to 1.

Let $a_{1}, a_{2}, \ldots, a_{n}, \ldots$ be a sequence of positive integers such that $a_{i+1}$ is the number of positive divisors of $a_{i}$ for every $i \geq 1$. Suppose that $a_{2} \neq 2$. Prove that there exists an index $m$ such that $a_{m}$ is a perfect square.
