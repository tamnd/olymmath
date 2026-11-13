---
tag: 9GHZ25E9TS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\left\{a_{n}\right\}$:
$$
a_{1}=\frac{1}{2}, a_{n+1}=\frac{a_{n}^{2}}{a_{n}^{2}-2 a_{n}+2}(n=1,2, \cdots) \text {. }
$$

Prove: For every positive integer $n(n \geqslant 2)$, we have
$$
a_{n}+\frac{1}{2} a_{n-1}+\frac{1}{2^{2}} a_{n-2}+\cdots+\frac{1}{2^{n-1}} a_{1}<\frac{1}{2^{n-1}} .
$$
