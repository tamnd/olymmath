---
tag: H3RR1KT16T
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102478
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite set $K_{0}$ in the plane (or in space), add to $K_{0}$ all points obtained by reflecting a point in $K_{0}$ about another point in $K_{0}$, to get the set $K_{1}$. Similarly, we can obtain $K_{2}$ from $K_{1}$, $K_{3}$ from $K_{2}$, and so on.
(1) Suppose the set $K_{0}$ consists of two points $A$ and $B$ that are 1 unit apart. What is the smallest value of $n$ such that there is a point in $K_{n}$ that is 1000 units away from $A$?
(2) Suppose the set $K_{0}$ consists of the three vertices of an equilateral triangle with area 1. Find the area of the smallest convex polygon, i.e., the convex hull, that contains $K_{n}$, for $n=1,2, \cdots$.
In the following sub-questions, assume that $K_{0}$ consists of the four vertices of a unit volume tetrahedron.
(3) How many faces does the convex hull of $K_{1}$ have, and what are the shapes of these faces?
(4) What is the volume of the convex hull of $K_{1}$?
(5) Find the volume of the convex hull of $K_{n}$, for $n=1,2, \cdots$.
