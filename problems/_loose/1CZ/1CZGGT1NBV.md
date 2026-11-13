---
tag: 1CZGGT1NBV
kind: problem
type: answer
answer: \frac{1}{4}t_{ABC}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $ABC$. The first player selects a point $P$ on side $AB$, the second player selects a point $Q$ on side $BC$, then the first player selects a point $R$ on side $AC$.

The goal of the first player is to make the area of triangle $PQR$ as large as possible, while the goal of the second player is to make it as small as possible. What is the largest area that the first player can definitely achieve?
