---
tag: YPX1XJQ9XH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $a_{i}(i=1,2, \cdots, n, n \geqslant 2)$ satisfying $\prod_{i=1}^{n} a_{i}=1$, let $s=\sum_{i=1}^{n} a_{i}$. Prove:
$$
\sum_{i=1}^{n} \frac{a_{i}^{5}}{a_{i}^{2}-a_{i}+s} \geqslant 1
$$
