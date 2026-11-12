---
tag: GXC24KES0R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kostya "combined" the addition and multiplication tables of natural numbers: he constructed a table where the rows and columns correspond to natural numbers, and filled in all the cells: in the cell at the intersection of the $r$-th row and the $s$-th column, he placed the number $r s + (s + r)$.

| | 1 | 2 | 3 | $\ldots$ | + | | 1 | 2 | 3 | $\ldots$ | $=$ | | 1 | 2 | 3 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 2 | 3 | $\ldots$ | | $\overline{1}$ | 2 | 3 | 4 | $\cdot$ | | 1 | 3 | 5 | 7 |
| 2 | 2 | 4 | 6 | $\ldots$ | | 2 | 3 | 4 | 5 | $\ldots$ | | 2 | 5 | 8 | 11 |
| | $\ldots$ | | | | | | $\cdots$ | | | | | $\cdots$ | $\cdots$ | | |

After looking carefully, Kostya noticed that some natural number $p$ is missing from the table (it is present only in the labels of the $n$-th row and $n$-th column, but not in the cells of the table itself). Prove that then the number $n+1$ is prime.
