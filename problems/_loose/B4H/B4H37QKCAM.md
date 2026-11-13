---
tag: B4H37QKCAM
kind: problem
type: answer
answer: k = 50
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 100 points on a circle that are about to be colored in two colors: red or blue. Find the largest number $k$ such that no matter how I select and color $k$ points, you can always color the remaining $100-k$ points such that you can connect 50 pairs of points of the same color with lines in a way such that no two lines intersect.
