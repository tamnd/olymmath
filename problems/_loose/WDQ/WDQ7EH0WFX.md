---
tag: WDQ7EH0WFX
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For suitable natural numbers $n$, there are polyhedra with $n$ vertices and fewer than $n$ faces. For example, for $n=8$, a cuboid is such a polyhedron, as it has exactly 8 vertices and is bounded by exactly 6 planar faces (rectangles).

Investigate whether there exists a natural number $N$ such that for every natural number $n \geq N$, there is a polyhedron with $n$ vertices that is bounded by fewer than $n$ planar faces!

If this is the case, determine the smallest natural number $N$ with this property!
