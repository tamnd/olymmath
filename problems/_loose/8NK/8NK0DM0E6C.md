---
tag: 8NK0DM0E6C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each cell of a $100 \times 100$ grid contains an arrow pointing up, down, right, or left. The grid is surrounded by impassable walls, except for an opening at the level of the right side of the cell located at the top-right corner. A chip moves around the grid as follows: when it is on a cell, it moves one cell in the direction indicated by the arrow in that cell, if possible. Then the arrow in that cell rotates 90 degrees clockwise. If the chip cannot move under these conditions, it remains temporarily in place, but the arrow still rotates. Is it possible for the chip to never leave the grid?
