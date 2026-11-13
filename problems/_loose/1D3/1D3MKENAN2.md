---
tag: 1D3MKENAN2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[1,\infty)\to(0,\infty)$ be a non-increasing function such that
$$\limsup_{n\to\infty}\frac{f(2^{n+1})}{f(2^n)}<\frac12.$$Prove that
$$\int^\infty_1f(x)\text dx<\infty.$$
