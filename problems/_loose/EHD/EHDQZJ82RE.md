---
tag: EHDQZJ82RE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}$ be real numbers greater than or equal to 1, $n \geqslant 1, A=1+a_{1}+a_{2}+\cdots+a_{n}$. Define $x_{0}=1, x_{k}=\frac{1}{1+a_{k} x_{k-1}}(1 \leqslant k \leqslant n)$. Prove: $x_{1}+x_{2}+\cdots+x_{n}>\frac{n^{2} A}{n^{2}+A^{2}}$.
