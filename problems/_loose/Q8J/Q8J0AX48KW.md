---
tag: Q8J0AX48KW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a horizontal strip on the plane (its sides are parallel lines) and $n$ lines intersecting the strip. Every two of them intersect inside the strip, and not a triple has a common point. Consider all the paths along the segments of those lines, starting on the lower side of the strip and ending on the upper side with the properties: moving along such a path we are constantly rising up, and, having reached the intersection, we are obliged to turn to another line. Prove that:
a) there are not less than $n/2$ such a paths without common points;
b) there is a path consisting of not less than of $n$ segments;
c) there is a path that goes along not more than along $n/2+1$ lines;
d) there is a path that goes along all the $n$ lines.
