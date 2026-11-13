---
tag: 8Q0ZKXVCN8
kind: problem
type: answer
answer: 3k - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a positive integer $k$. There are $n$ points chosen on a line, such the distance between any two adjacent points is the same. The points are colored in $k$ colors. For each pair of monochromatic points such that there are no points of the same color between them, we record the distance between these two points. If all distances are distinct, find the largest possible $n$.
