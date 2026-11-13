---
tag: WZJ7TF402C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $\left\{y_{n}\right\}$ is a sequence of real numbers, and satisfies $\sum_{i=1}^{n} y_{i}^{3}=0$. Prove: There must exist $k \in\{1,2, \cdots, n\}$, such that
$$
\left|y_{k}\right| \geqslant \sqrt[4]{\frac{27}{4}} \cdot \frac{\left|y_{1}+y_{2}+\cdots+y_{n}\right|}{n} .
$$
