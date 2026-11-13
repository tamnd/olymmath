---
tag: PVS944YD7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Take a $100 \times 100$ grid and glue the top edge to the bottom edge, and the left edge to the right edge, to form a "torus" (shaped like a tire). Can 50 squares be selected, with one chess piece placed in each, such that the chess pieces are red, blue, and green, and each red piece can attack at least two blue pieces (pieces in adjacent squares with different colors can attack each other), each blue piece can attack at least two green pieces, and each green piece can attack at least two red pieces?
