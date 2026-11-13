---
tag: KNXJ33RPJ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For non-negative integers $n$ and $k$, let $P_{n, k}(x)$ denote the rational function $$\frac{(x^{n}-1)(x^{n}-x) \cdots (x^{n}-x^{k-1})}{(x^{k}-1)(x^{k}-x) \cdots (x^{k}-x^{k-1})}.$$ Show that $P_{n, k}(x)$ is actually a polynomial for all $n, k \in \mathbb{N}$.
