---
tag: ARDBEF5J6W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the previous corollary, we can recover the fact that $ Q(x) = |x| $ is not a polynomial.

We deduce the following important result.

Proposition 1.17. Let $ a_{0}, a_{1}, \ldots, a_{n} $ and $ b_{0}, b_{1}, \ldots, b_{m} $ be real numbers. Suppose that for every real number $ x $:

$$
a_{0} + a_{1} x + a_{2} x^{2} + \cdots + a_{n} x^{n} = b_{0} + b_{1} x + \cdots + b_{m} x^{m}
$$

Then $ m = n $ and for all $ i $ between 0 and $ n $, we have $ a_{i} = b_{i} $.
