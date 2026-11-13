---
tag: NAXDXJ3EW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Renata the robot packs boxes in a warehouse. Each box is a cube of side length $1$ foot. The warehouse floor is a square, $12$ feet on each side, and is divided into a $12$-by-$12$ grid of square tiles $1$ foot on a side. Each tile can either support one box or be empty. The warehouse has exactly one door, which opens onto one of the corner tiles.
Renata fits on a tile and can roll between tiles that share a side. To access a box, Renata must be able to roll along a path of empty tiles starting at the door and ending at a tile sharing a side with that box.

- Show how Renata can pack $91$ boxes into the warehouse and still be able to access any box.

- Show that Renata **cannot** pack $95$ boxes into the warehouse and still be able to access any box.
