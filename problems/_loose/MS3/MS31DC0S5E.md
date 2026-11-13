---
tag: MS31DC0S5E
kind: problem
type: answer
answer: All n that are multiples of 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $n$ such that any convex $n$-gon in the plane can be divided into finite number of triangles satisfying the following conditions.

(i) No vertex is added to the sides of the $n$-gon. However, any number of vertices can be added to the interior of the $n$-gon.
(ii) All triangles have exactly three bounding edges and the edges intersect only on vertices.
(iii) Each vertex has an even number of edges connected to it.
