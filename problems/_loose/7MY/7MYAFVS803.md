---
tag: 7MYAFVS803
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a colorless plane, three arbitrary points were painted: one in red, another in blue, and the third in yellow. Each move involves selecting any two points of two of these colors and painting another point in the remaining color such that these three points form an equilateral triangle where the colors of the vertices follow the order "red, blue, yellow" (clockwise). It is allowed to paint a point that is already painted (consider that a point can have multiple colors simultaneously). Prove that no matter how many moves are made, all points of the same color will lie on the same line.
