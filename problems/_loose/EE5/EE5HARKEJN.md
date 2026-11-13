---
tag: EE5HARKEJN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_1A_2 \dots A_n$ be a polygon (not necessarily regular) with $n$ sides. Suppose there is a translation that maps each point $A_i$ to a point $B_i$ in the same plane. For convenience, define $A_0 = A_n$ and $B_0 = B_n$. Prove that
$$
\sum_{i=1}^{n} (A_{i-1} B_{i})^2 = \sum_{i=1}^{n} (B_{i-1} A_{i})^2 .
$$
