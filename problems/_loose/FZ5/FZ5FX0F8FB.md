---
tag: FZ5FX0F8FB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's interpret the sequence $a_{n}$ as follows:

$$
a_{1}=1 ; a_{2}=2 ; a_{n}=a_{n-1}+a_{n-2}, \text { if } n \geq 3
$$

Prove that for all $n$ and $k$ (where $n, k \geq 1$ are integers),

$$
\left|\frac{a_{n+1}}{a_{n}}-\frac{a_{k+1}}{a_{k}}\right| \leq 1
$$
