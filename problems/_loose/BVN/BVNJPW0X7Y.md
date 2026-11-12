---
tag: BVNJPW0X7Y
kind: problem
type: answer
answer: "223"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider points arranged in a square of 20 columns and 20 rows, each of which is colored either red or blue. Whenever two points of the same color are adjacent in some row or column, they are connected by a segment of the same color. Adjacent points of different colors are connected by black segments. Among the points, 219 are red, 39 of which are on the boundary of the square, but none are in the corners. There are also 237 black segments. How many blue segments are there?
