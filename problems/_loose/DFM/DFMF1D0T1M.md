---
tag: DFMF1D0T1M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n=525$, find the largest positive integer $n$ such that for positive real numbers $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n}$, we have
$$
\sum_{i=1}^{n} \frac{\alpha_{i}^{2}-\alpha_{i} \alpha_{i+1}}{\alpha_{i}^{2}+\alpha_{i+1}^{2}} \geqslant 0\left(\alpha_{n+1}=\alpha_{1}\right) .
$$
