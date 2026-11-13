---
tag: ZET4QMVH47
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261492
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_k$ be the number of ordered $10$-tuples $(x_1, x_2, ..., x_{10})$ of nonnegative integers such that
$$x^2_1+ x^2_2+ ... + x^2_{10} = k.$$
Let $b_k = 0$ if $a_k$ is even and $b_k = 1$ if $a_k$ is odd. Find $\sum^{2012}_{i=1} b_{4i}$.
