---
tag: Y3B5XB9ZHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $N$ objects and a set of properties $P_{1}, \ldots, P_{n}$. Let $N_{i}$ be the number of objects having property $P_{i}$, $N_{i j}$ be the number of objects having properties $P_{i}$ and $P_{j}$, and so on. Prove that the number of objects not having any of the given properties is

$$
N-\sum N_{i}+\sum_{i_{1}<i_{2}} N_{i_{1} i_{2}}-\sum_{i_{1}<i_{2}<i_{3}} N_{i_{1} i_{2} i_{3}}+\ldots+(-1)^{n} N_{123 \ldots n}
$$

(the inclusion-exclusion principle).
