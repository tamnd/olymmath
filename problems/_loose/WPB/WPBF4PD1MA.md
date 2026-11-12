---
tag: WPBF4PD1MA
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the cells of an $8 \times 8$ chessboard, there are 8 white and 8 black chips such that no two chips are in the same cell. Additionally, no column or row contains chips of the same color. For each white chip, the distance to the black chip in the same column is calculated. What is the maximum value that the sum of these distances can take? The distance between chips is the distance between the centers of the cells they occupy.
