---
tag: AVB8S09YEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36998
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive numbers $a_{1}, a_{2}, a_{3}, b_{1}, b_{2}, b_{3}$, it is known that the inequalities are satisfied:

$$
\sum_{i \leqslant j} a_{i} a_{j} \leqslant 1, \sum_{i \leqslant j} b_{i} b_{j} \leqslant 1
$$

Prove that

$$
\sum_{i \leqslant j}\left(a_{i}-b_{i}\right)\left(a_{j}-b_{j}\right) \leqslant 1
$$
