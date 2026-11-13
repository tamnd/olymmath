---
tag: 6W6FWGQ5Z1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $x_{1}, x_{2}, \cdots, x_{n}(n \geqslant 2)$. Prove:
$$
\sum_{i=1}^{n} \frac{1+x_{i}^{2}}{1+x_{i} x_{i+1}} \geqslant n\left(x_{n+i}=x_{i}\right) \text {. }
$$
