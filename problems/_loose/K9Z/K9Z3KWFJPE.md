---
tag: K9Z3KWFJPE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In table $A$ of size 10 by 10, some numbers are written. Let the sum of all numbers in the first row be denoted by $S_{1}$, in the second row by $S_{2}$, and so on. Similarly, the sum of numbers in the first column is denoted by $t_{1}$, in the second column by $-t_{2}$, and so forth. A new table $B$ of size 10 by 10 is formed, with numbers written as follows: in the first cell of the first row, the smallest of the numbers $S_{1}$ and $t_{1}$ is written, in the third cell of the fifth row, the smallest of the numbers $S_{5}$ and $t_{3}$ is written, and so on for the entire table. It turns out that the cells of table $B$ can be numbered from 1 to 100 in such a way that the number in the cell with the $k$-th number is less than or equal to $k$. What is the maximum value that the sum of all numbers in table $A$ can take under these conditions?
