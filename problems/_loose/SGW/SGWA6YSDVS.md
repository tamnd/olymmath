---
tag: SGWA6YSDVS
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162058
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any coloring of the cells of a grid board in black and white, the board is divided into monochromatic areas (with a checkerboard coloring, all areas are single-cell). Each move, Petya selects one area and repaints it to the opposite color. The repainted area merges with adjacent areas of the same color, and the number of areas decreases. What is the minimum number of moves Petya can make to turn a checkerboard-colored $13 \times 13$ board into a monochromatic board?
