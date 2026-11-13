---
tag: YCFX1D57D2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Among the integer-coordinate $(x, y)$ points in the coordinate system, for which $1 \leqq x \leqq 2 k$ and $1 \leqq y \leqq 2 n$ hold, we paint them red or blue such that in every row there are $k$ red and $k$ blue points, and in every column there are $n$ red and $n$ blue points. The unit-length segments determined by the painted points are painted red if both endpoints are red, and blue if both endpoints are blue. Those segments whose endpoints are of different colors are not painted. It is to be proven that the number of red and blue segments resulting is equal.
