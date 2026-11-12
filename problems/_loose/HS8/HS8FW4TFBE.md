---
tag: HS8FW4TFBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\sigma$ be some permutation of the numbers $1, \ldots, n$. We call any pair of numbers $i < j$ such that $i > \sigma(j)$ an inversion. Prove that the parity of the permutation coincides with the parity of the number of all inversions.

Each permutation $\sigma$ of the numbers $1, \ldots, n$ can be represented as a product of cycles in the following way. Suppose $\sigma(a_1) = a_2$, $\sigma(a_2) = a_3, \ldots, \sigma(a_k) = a_1$ and the numbers $a_1, a_2, \ldots, a_k$ are pairwise distinct. Then the numbers $a_1, a_2, \ldots, a_k$ are permuted cyclically, and we denote this cycle as $(a_1, a_2, \ldots, a_k)$. Note that $(a_2, a_3, \ldots, a_k, a_1)$ is the same cycle. If $\sigma(a_1) = a_1$, then the corresponding cycle is denoted as $(a_1)$. Now, choose any number from 1 to $n$ that has not yet been included in the first cycle, and construct a cycle that includes this number in the same way. Continuing this process, we will associate a set of non-overlapping cycles with the permutation. For example, the permutation $\sigma(1) = 2$, $\sigma(2) = 1$, $\sigma(3) = 4$, $\sigma(4) = 3$ corresponds to the product of cycles $(12)(34)$.
