---
tag: GMQM1E3X93
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Rioplatense Mathematical Olympiad
---
The vertices of a regular hexagon are marked on a blackboard. Ana draws some segments that are either sides or diagonals of the hexagon, in any way she wants to (she can even decide not to draw any segment at all, or to draw the 15 possible segments).
Afterwards, Beto writes a positive integer on each vertex, in such a way that the following condition is satisfied: if two vertices are connected by a segment drawn by Ana, then the corresponding numbers must have a common divisor greater than 1; otherwise, if they are not connected by a segment, the numbers must not have any common divisor greater than 1.

a. Show that Beto can always complete his task.

b. Once Beto completes his task, he must pay Ana $M$ pesos, where $M$ is the greatest of the 6 numbers that Beto wrote. Beto wants to pay as least as possible and Ana wants to get paid the greatest possible amount of pesos. Can Ana draw the segments in such a way that she is guaranteed to receive more than 2023 pesos?
