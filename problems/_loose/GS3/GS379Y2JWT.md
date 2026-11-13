---
tag: GS379Y2JWT
kind: problem
type: answer
answer: e - \frac{1}{e}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a,\ b$ be postive real numbers. For a real number $ t$, denote by $d(t)$ the distance between the origin and the line $ (ae^t)x + (be^{ - t})y = 1$.

Let $ a,\ b$ vary with $ ab = 1$, find the minimum value of $ \int_0^1 \frac {1}{d(t)^2}\ dt$.
