---
tag: 5QSG2J9EVF
kind: problem
type: answer
answer: "55"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a convex 10-gon $A_{1} A_{2} \ldots A_{10}$, all sides and all diagonals connecting vertices every other one (i.e., $A_{1} A_{3}, A_{2} A_{4}$, etc.) are drawn, except for the side $A_{1} A_{10}$ and the diagonals $A_{1} A_{9}, A_{2} A_{10}$.

A path from $A_{1}$ to $A_{10}$ is defined as a non-self-intersecting broken line (i.e., one where non-adjacent segments do not have common points) with endpoints $A_{1}$ and $A_{10}$, each segment of which coincides with one of the drawn sides or diagonals. Find the number of such paths.
