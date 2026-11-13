---
tag: DWEA32VP71
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sam colors each tile in a 4 by 4 grid white or black. A coloring is called *rotationally symmetric* if the grid can be rotated 90, 180, or 270 degrees to achieve the same pattern. Two colorings are called *rotationally distinct* if neither can be rotated to match the other. How many rotationally distinct ways are there for Sam to color the grid such that the colorings are *not* rotationally symmetric?

*Proposed by Gabriel Wu*
