---
tag: 8FVGBCV3AA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n=3k$ be a positive integer (with $k\geq 2$). An equilateral triangle is divided in $n^2$ unit equilateral triangles with sides parallel to the initial, forming a grid. We will call "trapezoid" the trapezoid which is formed by three equilateral triangles (one base is equal to one and the other is equal to two). We colour the points of the grid with three colours (red, blue and green) such that each two neighboring points have different colour.
Finally, the colour of a "trapezoid" will be the colour of the midpoint of its big base.
Find the number of all "trapezoids" in the grid (not necessarily disjoint) and determine the number of red, blue and green "trapezoids".
