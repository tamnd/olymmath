---
tag: R5GMPZTG7P
kind: problem
type: answer
answer: \frac{n-a_{k}-\ldots-a_{0}}{p-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=70607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p-$ be a prime number and the representation of the number $n$ in the $p$-ary system has the form: $n=a_{k} p^{k}+a_{k-1} p^{k-1}+\ldots+a_{1} p^{1}+$ $a_{0}$.

Find the formula expressing the exponent $\alpha_{p}$, with which this number $p$ enters the canonical decomposition of $n!$, in terms of $n, p$, and the coefficients $a_{k}$.
