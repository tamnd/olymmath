---
tag: GZAQ01M3Z9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A rectangle $R$ is partitioned into smaller rectangles whose sides are parallel with the sides of $R$. Let $B$ be the set of all boundary points of all the rectangles in the partition, including the boundary of $R$. Let $S$ be the set of all (closed) segments whose points belong to $B$. Let a maximal segment be a segment in $S$ which is not a proper subset of any other segment in $S$. Let an intersection point be a point in which 4 rectangles of the partition meet. Let $m$ be the number of maximal segments, $i$ the number of intersection points and $r$ the number of rectangles. Prove that $m + i = r + 3$.
