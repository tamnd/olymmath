---
tag: R2J6B1TJZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, if $n$ is a product of two different primes and $n \equiv 2 \pmod 3$, then $n$ is called "special number." For example, $14, 26, 35, 38$ is only special numbers among positive integers $1$ to $50$. Prove that for any finite set $S$ with special numbers, there exist two sets $A, B$ such that

- $A \cap B = \emptyset, A \cup B = S$

- $||A| - |B|| \leq 1$

- For all primes $p$, the difference between number of elements in $A$ which is multiple of $p$ and number of elements in $B$ which is multiple of $p$ is less than or equal to $1$.
