---
tag: FBETG9C6DZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an $n \times n$ square lattice with points colored either black or white. A square path is a closed path in the shape of a square with edges parallel to the edges of the lattice. Let $M(n)$ be the minimum number of black points needed for an $n \times n$ square lattice so that every square path has at least one black point on it. Prove that
$$
\frac{2}{7}(n-1)^{2} \leq M(n) \leq \frac{2}{7} n^{2} .
$$
