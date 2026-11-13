---
tag: 19M2NW7HKX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide the sides of an equilateral triangle $ABC$ with side length 1 into $n$ equal parts, and draw lines through each division point parallel to the other two sides. These lines divide $\triangle ABC$ into many small equilateral triangles. The vertices of these small triangles are called nodes, and a real number is placed at each node. It is known that
(1) The numbers placed at points $A, B, C$ are $a, b, c$ respectively;
(2) In each rhombus formed by two adjacent smallest triangles sharing a common side, the sums of the numbers placed at the two pairs of opposite vertices are equal.

Find the shortest distance $r$ between the node with the maximum number and the node with the minimum number, and the sum $S$ of all numbers placed at the nodes.
