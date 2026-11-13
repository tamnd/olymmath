---
tag: B1YXAFRXD4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n$ is a positive integer. For a sequence of non-negative real numbers satisfying
$$
0 \leqslant a_{1}, a_{2}, \cdots, a_{n} \leqslant 1
$$

prove:
$$
\frac{1-a_{1} a_{2} \cdots a_{n}}{n} \leqslant \frac{1}{1+a_{1}+a_{2}+\cdots+a_{n}} .
$$
