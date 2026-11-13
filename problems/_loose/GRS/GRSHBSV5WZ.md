---
tag: GRSHBSV5WZ
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A Fano table is a table with three columns where

- each entry is an integer taken from the list $1,2,3, \ldots, n$, and
- each row contains three different integers, and
- for each possible pair of distinct integers from the list $1,2,3, \ldots, n$, there is exactly one row that contains both of these integers.

The number of rows in the table will depend on the value

| 1 | 2 | 4 |
| :--- | :--- | :--- |
| 2 | 3 | 5 |
| 3 | 4 | 6 |
| 4 | 5 | 7 |
| 5 | 6 | 1 |
| 6 | 7 | 2 |
| 7 | 1 | 3 |

of $n$. For example, the table shown is a Fano table with $n=7$. (Notice that 2 and 6 appear in the same row only once, as does every other possible pair of the numbers $1,2,3,4,5,6,7$.) For how many values of $n$ with $3 \leq n \leq 12$ can a Fano table be created?
(A) 2
(B) 3
(C) 5
(D) 6
(E) 7
