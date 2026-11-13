---
tag: KW4YFZANSY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be complex polynomials with $\deg p>\deg q$ and let $f(z)=\frac{p(z)}{q(z)}$. Suppose that all roots of $p$ lie inside the unit circle $|z|=1$ and that all roots of $q$ lie outside the unit circle. Prove that
$$\max_{|z|=1}|f'(z)|>\frac{\deg p-\deg q}2\max_{|z|=1}|f(z)|.$$
