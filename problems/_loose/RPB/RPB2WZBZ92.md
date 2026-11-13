---
tag: RPB2WZBZ92
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119937
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{1}, x_{2}, \cdots, x_{n} \in \mathbf{R}_{+}, \sum_{i=1}^{n} \frac{1}{1+x_{i}}$ $=\frac{n}{2}$. Prove:
$$
\sum_{1 \leqslant i, j \leqslant n} \frac{1}{x_{i}+x_{j}} \geqslant \frac{n^{2}}{2} .
$$
