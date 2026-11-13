---
tag: YYWZA4X8P5
kind: problem
type: answer
answer: 5\leqslantk\leqslant10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 10 points in a plane, no three of which are collinear, each pair of points is connected by a line segment, and each line segment is colored with one of $k$ colors, such that: for any $k$ points among the 10 points, the line segments connecting each pair of these $k$ points are colored with all $k$ colors. Find all possible positive integers $k$ that satisfy this condition, where $1 \leqslant k \leqslant 10$.
(39th IMO Shortlist)
