---
tag: BJASCGFDWZ
kind: problem
type: answer
answer: (-1)^{n}[n+\frac{1-(-1)^{n}}{2}]\cdot2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $S_{n}=\{1,2, \cdots, n\}$, for each non-empty subset $A$, we multiply each element $k(1 \leqslant k \leqslant n)$ by $(-1)^{k}$, and then sum them up. The total sum of all these sums is $ $.
