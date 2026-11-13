---
tag: 667HEDHHN7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the clock face marked with numbers $1,2, \cdots, 12$, color the twelve points using four colors: red, yellow, blue, and green, with three points of each color. Construct $n$ convex quadrilaterals using these points as vertices, such that:
(1) Each quadrilateral has four vertices of four different colors;
(2) For any three quadrilaterals, there exists one color such that the three vertices of that color are marked with different numbers.

Find the maximum value of $n$.
