---
tag: SP4BHV8AWK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, x_{3}, \cdots$ be distinct positive real numbers. Prove that $x_{1}, x_{2}, x_{3}, \cdots$ is a geometric sequence if and only if for all integers $n(n \geqslant 2)$, we have
$$
\frac{x_{1}}{x_{2}} \sum_{k=1}^{n-1} \frac{x_{n}^{2}}{x_{k} x_{k+1}}=\frac{x_{n}^{2}-x_{1}^{2}}{x_{2}^{2}-x_{1}^{2}} .
$$
