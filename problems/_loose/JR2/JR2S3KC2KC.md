---
tag: JR2S3KC2KC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a rectangular grid of $49 \times 69$, all $50 \cdot 70$ vertices of the cells are marked. Two players play the following game: each move, a player connects two points with a segment, with the condition that one point cannot be the endpoint of two drawn segments. Segments can share common points. Segments are drawn until all points are used. If, after this, the first player can choose directions on all drawn segments such that the sum of all resulting vectors is the zero vector, then the first player wins; otherwise, the second player wins. Who wins with optimal play?
