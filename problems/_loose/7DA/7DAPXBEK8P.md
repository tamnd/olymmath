---
tag: 7DAPXBEK8P
kind: problem
type: answer
answer: "506"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the line segment $x+y=1(x \geqslant 0$, $y \geqslant 0)$ with 2020 points. Find the smallest positive integer $k$, such that for any 2020 points, there always exists a way to divide these 2020 points into two groups, where the sum of the y-coordinates of one group is no greater than $k$, and the sum of the x-coordinates of the other group is no greater than $k$ (these 2020 points can overlap).
