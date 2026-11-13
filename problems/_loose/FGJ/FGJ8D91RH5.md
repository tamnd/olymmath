---
tag: FGJ8D91RH5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, let $a_n$ be the number of permutations $\tau$ of $\{1, 2, ... , n\}$ such that $\tau (\tau (\tau (x))) = x$ for $x = 1, 2, ..., n$. The first few values are $a_1 = 1, a_2 = 1, a_3 = 3, a_4 = 9$.
Prove that $3^{334}$ divides $a_{2001}$.
(A permutation of $\{1, 2, ... , n\}$ is a rearrangement of the numbers $\{1, 2, ... , n\}$ or equivalently, a one-to-one and
onto function from $\{1, 2, ... , n\}$ to $\{1, 2, ... , n\}$. For example, one permutation of $\{1, 2, 3\}$ is the rearrangement $\{2, 1, 3\}$, which is equivalent to the function $\sigma : \{1, 2, 3\} \to \{1, 2, 3\}$ defined by $\sigma (1) = 2, \sigma (2) = 1, \sigma (3) = 3$.)
