---
tag: S8W3JMYSW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $a_{1}, a_{2}, \ldots, a_{m}$, $b_{1}, b_{2}, \ldots, b_{n}$, such that $a_{1}+a_{2}+\ldots+a_{m}=b_{1}+b_{2}+\ldots+b_{n}$. Prove that in an empty table with $m$ rows and $n$ columns, no more than $m+n-1$ positive numbers can be placed so that the sum of the numbers in the $i$-th row equals $a_{i}$, and the sum of the numbers in the $k$-th column equals $b_{k}$.
