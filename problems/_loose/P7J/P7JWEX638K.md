---
tag: P7JWEX638K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219513
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a polynomial with integer coefficients. Define $$a_1 = f(0)~,~a_2 = f(a_1) = f(f(0))~,$$
and $~a_n = f(a_{n-1})$ for $n \geqslant 3$.

If there exists a natural number $k \geqslant 3$ such that $a_k = 0$, then prove that either $a_1=0$ or $a_2=0$.
