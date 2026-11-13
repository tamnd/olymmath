---
tag: NP9FE0B7Z6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, b_{1}, a_{2}, b_{2}, \ldots, a_{n}, b_{n}$ be nonnegative real numbers. Prove that
$$
\sum_{i, j=1}^{n} \min \left\{a_{i} a_{j}, b_{i} b_{j}\right\} \leq \sum_{i, j=1}^{n} \min \left\{a_{i} b_{j}, a_{j} b_{i}\right\}
$$
