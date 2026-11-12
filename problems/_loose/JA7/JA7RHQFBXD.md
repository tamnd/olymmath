---
tag: JA7RHQFBXD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a line, points $A_{1}, \ldots, A_{n}$ and $B_{1}, \ldots, B_{n-1}$ are given. Prove that

$$
\sum_{i=1}^{n} \frac{\prod_{k=1}^{n-1} \overline{A_{i} B_{k}}}{\prod_{j \neq 1} \overline{A_{i} A_{j}}}=1
$$
