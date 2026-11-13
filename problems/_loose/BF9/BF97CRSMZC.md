---
tag: BF97CRSMZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function defined on the positive integers with $f(n) \ge 0$ and $f(n) \le f(n+1)$ for all $n$. Prove that if
$$\sum_{n = 1}^{\infty} \frac{f(n)}{n^2}$$
diverges, there exists a sequence $a_1, a_2, \dots$ such that the sequence $\tfrac{a_n}{n}$ hits every natural number, while
$$a_{n+m} \le a_n + a_m + f(n+m)$$
holds for every pair $n$, $m$.
