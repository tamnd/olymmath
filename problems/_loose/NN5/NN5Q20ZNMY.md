---
tag: NN5Q20ZNMY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence is determined by conditions $ F_0 = 0, F1 = 1$, and $ F_k=F_{k-1}+F_{k-2}$ for all $ k \ge 2$. Let $ n$ be a positive integer and let $ P(x) = a_mx^m +. . .+ a_1x+ a_0$ be a polynomial that satisfies the following two conditions:
(1) $ P(F_n) = F_{n}^{2}$ ;
(2) $ P(F_k) = P(F_{k-1}) + P(F_{k-2}$ for all $ k \ge 2$.
Find the sum of the coefficients of P.
