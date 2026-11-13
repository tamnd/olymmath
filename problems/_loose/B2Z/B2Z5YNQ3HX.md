---
tag: B2Z5YNQ3HX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n > 3$ be an odd positive integer not divisible by $3$. Determine if it is possible to form an $n \times n$ array of numbers such that

- **(a)** the set of the numbers in each row is a permutation of $0, 1, \dots , n - 1$;
the set of the numbers in each column is a permutation of $0, 1, \dots , n-1$;

- **(b)** the board is *totally non-symmetric*: for $1 \le i < j \le n$ and $1 \le i' < j' \le n$, if $(i, j) \neq (i', j')$ then $(a_{i,j} , a_{j,i}) \neq (a_{i',j'} , a_{j',i'})$ where $a_{i,j}$ denotes the entry in the $i^\text{th}$ row and $j^\text{th}$ column.
