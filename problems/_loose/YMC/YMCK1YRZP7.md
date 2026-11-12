---
tag: YMCK1YRZP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3644327
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44491
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
Suppose $ (a_i)_{i \in \mathbb{N}} $ is a sequence of natural numbers and $ f $ is a quadratic polynomial. For every $ n \geq 2 $, we have:
$$
a_{n+1} = |f(a_n) - f(a_{n-1})|.
$$
Is it possible for both sequences $ a_n $ and $ b_n:= \sum_{n\geq 1} \dfrac{1}{a_n}$ to be unbounded under the following assumptions?
a. If the coefficients of $ f $ are real.
b. If the coefficients of $ f $ are integers.
