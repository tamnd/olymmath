---
tag: JWJSJKFGC3
kind: problem
type: answer
answer: (2011 \cdot 2010 + 2) \cdot 2^{2011}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the interior of the convex 2011-gon are $2011$ points, such that no three among the given $4022$ points (the interior points and the vertices) are collinear. The points are coloured one of two different colours and a colouring is called "good" if some of the points can be joined in such a way that the following conditions are satisfied:
1) Each segment joins two points of the same colour.
2) None of the line segments intersect.
3) For any two points of the same colour there exists a path of segments connecting them.
Find the number of "good" colourings.
