---
tag: P8B3PR6TPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist an odd number $ n \geqslant 3 $ and $ n $ distinct prime numbers $ p_{1}, p_{2}, \cdots, p_{n} $, such that $ p_{i} + p_{i+1} $ (for $ i = 1, 2, \cdots, n $; $ p_{n+1} = p_{1} $) are all perfect squares? Please prove your conclusion.
(The 11th China Western Mathematical Olympiad)

The original problem provided by the proposer is as follows:
Place $ n $ distinct prime numbers $ a_{1}, a_{2}, \cdots, a_{n} $ at the $ n $ vertices of a convex $ n $-gon $ A_{1} A_{2} \cdots A_{n} $, such that the sum of the numbers at the endpoints of each side of the $ n $-gon, $ a_{1} + a_{2}, a_{2} + a_{3}, \cdots, a_{n-1} + a_{n}, a_{n} + a_{1} $, are all perfect squares. Such an $ n $-gon $ A_{1} A_{2} \cdots A_{n} $ is called a "prime $ n $-gon". If two prime $ n $-gons $ A_{1} A_{2} \cdots A_{n} $ and $ B_{1} B_{2} \cdots B_{n} $ have $ 2n $ distinct prime numbers $ a_{1}, a_{2}, \cdots, a_{n}, b_{1}, b_{2}, \cdots, b_{n} $ at their vertices, and $ a_{1} + a_{2} = b_{1} + b_{2}, \cdots, a_{n-1} + a_{n} = b_{n-1} + b_{n}, a_{n} + a_{1} = b_{n} + b_{1} $, then these two $ n $-gons are called "equivalent". Determine:
(1) Whether there exist two equivalent prime triangles?
(2) Whether there exist two equivalent prime quadrilaterals?
Prove your conclusions.
