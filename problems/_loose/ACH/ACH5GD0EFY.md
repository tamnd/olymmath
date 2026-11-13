---
tag: ACH5GD0EFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $20 \times 20$ rectangular grid has been given. It is known that one of the grid's unit squares contains a hidden treasure. To find the treasure, we have been given an opportunity to order several scientific studies at the same time, results of which will be known only after some time. For each study we must choose one $1 \times 4$ rectangle, and the study will tell whether the rectangle contains the treasure. The $1 \times 4$ rectangle can be either horizontal or vertical, and it can extend over a side of the $20 \times 20$ grid, coming back in at the opposite side (you can think of the $20 \times 20$ grid as a torus - the opposite sides are connected).
What is the minimal amount of studies that have to ordered for us to precisely determine the unit square containing the treasure?
