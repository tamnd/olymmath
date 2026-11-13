---
tag: PR42SK2APG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that the string $d_kd_{k-1} \cdots d_1d_0$ represents a number $n$ in base $-2$ if each $d_i$ is either $0$ or $1$,
and $n = d_k(-2)^k + d_{k-1}(-2)^{k-1} + \cdots + d_1(-2) + d_0$. For example, $110_{-2}$ represents the number $2$. What string represents $2016$ in base $-2$?
