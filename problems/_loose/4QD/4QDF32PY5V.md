---
tag: 4QDF32PY5V
kind: problem
type: answer
answer: 2^{n-3}\cdotn(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the set $S_{n}=\{1,2, \cdots, n\}$, if $X$ is a subset of $S_{n}$, the sum of all numbers in $X$ is called the "capacity" of $X$ (the capacity of the empty set is defined as 0). If the capacity of $X$ is odd (even), then $X$ is called an odd (even) subset of $S_{n}$.
(1) Prove that the number of odd subsets of $S_{n}$ is equal to the number of even subsets.
(2) Prove that when $n \geqslant 3$, the sum of the capacities of all odd subsets of $S_{n}$ is equal to the sum of the capacities of all even subsets.
(3) When $n \geqslant 3$, find the sum of the capacities of all odd subsets of $S_{n}$.
(1992 National High School League Question)
