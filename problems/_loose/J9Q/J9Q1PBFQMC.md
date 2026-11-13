---
tag: J9Q1PBFQMC
kind: problem
type: answer
answer: (k, -k, 1), (0, 1, 0), (1, 0, 0), (0, -2, 3), (-2, 0, 3), (-2, -3, 6), (-3, -2, 6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve for integers $x,y,z$: $$ \{ \begin{array}{ccc} x + y &=& 1 - z \\ x^3 + y^3 &=& 1 - z^2 . \end{array} $$
