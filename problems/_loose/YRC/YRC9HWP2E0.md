---
tag: YRC9HWP2E0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $m \times m$ grid, each small square is filled with a non-negative integer. If a small square is filled with 0, then the sum of the numbers in all the small squares in the row and column containing this small square is not less than $m$. Prove that the sum of all the numbers filled in the grid is not less than
$$
\text { than } \frac{m^{2}}{2} \text {. }
$$
