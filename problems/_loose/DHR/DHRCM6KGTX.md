---
tag: DHRCM6KGTX
kind: problem
type: answer
answer: \det A > 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a real $n\times n$ matrix satisfying
$$A+A^{\text T}=I,$$where $A^{\text T}$ denotes the transpose of $A$ and $I$ the $n\times n$ identity matrix. Show that $\det A>0$.
