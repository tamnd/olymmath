---
tag: JP5WX0AC6R
kind: problem
type: answer
answer: all integers n ≥ 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2$ and consider a table with $n+1$ rows and $n$ columns, in which, on each of the first $n$ rows, Nicuşor writes, in some order, the numbers $1, 2, \dots, n$. Then, he chooses a permutation $a_1, a_2, \dots, a_n$ of the numbers $1, 2, \dots, n$ and completes the last row as follows: for each $j \in \{1, 2, \dots, n\}$, he writes in the cell at column $j$ the number of occurrences of $a_j$ in the cells located at the intersection of column $j$ with the first $n$ rows.
Determine all $n$ for which Nicuşor can complete the table and choose $a_1, a_2, \dots, a_n$ so that the last row contains, in some order, the numbers $1, 2, \dots, n$.
Cristi Săvescu
