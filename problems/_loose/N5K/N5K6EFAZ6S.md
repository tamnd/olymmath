---
tag: N5K6EFAZ6S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $\{a_n\}_{n=1}^\infty$ is a sequence. The partial sums $\{s_n\}_{n=1}^\infty$ are defined by
$$s_n=\sum_{i=1}^na_i.$$
The Cesàro sums are then defined as $\{A_n\}_{n=1}^\infty$, where
$$A_n=\frac{1}{n}\cdot\sum_{i=1}^ns_i.$$
Let $a_n=(-1)^{n+1}$. What is the limit of the Cesàro sums of $\{a_n\}_{n=1}^\infty$ as $n$ goes to infinity?
