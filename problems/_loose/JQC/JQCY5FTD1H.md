---
tag: JQCY5FTD1H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sequence $a_n$ is defined by $a_1=\frac{1}{2}$, $a_m=\frac{a_{m-1}}{2m \cdot a_{m-1} + 1}$ for $m>1$. Determine value of $a_1+a_2+...+a_k$ in terms of $k$, where $k$ is positive integer.
