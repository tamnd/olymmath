---
tag: 949R9VQEVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $a_{1}, a_{2}, \cdots, a_{n} \in \mathbf{R}_{+}$. Prove:
$$
\sum_{i=1}^{n} \sqrt{\frac{a_{i}^{n-1}}{a_{i}^{n-1}+\left(n^{2}-1\right) \prod_{j \neq i} a_{j}}} \geqslant 1 .
$$
