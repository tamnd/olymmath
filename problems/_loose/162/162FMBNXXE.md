---
tag: 162FMBNXXE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are sets of integers

$$
A=\left\{a_{1}, a_{2}, \ldots, a_{n}\right\}, B=\left\{b_{1}, b_{2}, \ldots, b_{n}\right\}
$$

such that there exist elements $x \in A, y \in B$ for which $x \equiv y(\bmod 2 n)$.

Does there always exist non-empty subsets $A^{\prime} \subset A, B^{\prime} \subset B$ such that the sum of the elements of $A^{\prime}$ and the elements of $B^{\prime}$ is divisible by $2 n$?
