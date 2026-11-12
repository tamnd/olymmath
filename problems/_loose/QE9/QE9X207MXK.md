---
tag: QE9X207MXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $ n $. A sequence of natural numbers $ a_{1}, a_{2}, \ldots, a_{k} (k \geqslant n) $ is called universal for the given $ n $ if any permutation of the numbers $ 1, 2, \ldots, n $ (i.e., any sequence of $ n $ numbers in which each of the numbers $ 1, 2, \ldots, n $ appears exactly once) can be obtained by removing some elements from it. For example, the sequence $ (1, 2, 3, 1, 2, 1, 3) $ is universal for $ n=3 $, while the sequence $ (1, 2, 3, 2, 1, 3, 1) $ is not universal, as it is impossible to obtain the permutation $ (3, 1, 2) $ by removing any elements from it. The goal of this problem is to estimate the number of elements in the shortest universal sequence (for a given $ n $).

a) Provide an example of a universal sequence with $ n^{2} $ elements.

b) Provide an example of a universal sequence with $ n^{2}-n+1 $ elements.

c)* Prove that any universal sequence consists of at least $ n(n+1) / 2 $ elements.

d)* Prove that for $ n=4 $, the shortest universal sequence consists of 12 elements.

e) * Try to find the shortest possible universal sequence for a given $ n $. (The jury knows how to construct a universal sequence with $ n^{2}-2n+4 $ elements.)
