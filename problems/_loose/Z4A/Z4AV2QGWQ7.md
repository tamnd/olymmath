---
tag: Z4AV2QGWQ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's mark a rectangle on the square grid whose vertices are grid points, sides are grid lines, and one side has $2k$ grid points, while the other has $2n$ grid points. Color the points such that in every row there are $k$ red and $k$ blue points, and in every column there are $n$ red and $n$ blue points. Then, color those unit segments whose endpoints are of the same color with the color of the endpoints. The other segments remain uncolored. Prove that the number of red and blue segments is equal.
