---
tag: 4QBBZBR57J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the plane, there are $n$ rectangles. Any two of the $n$ rectangles have two sets of sides that are parallel, and the sides of any two rectangles do not lie on the same line (rectangles can intersect). The sides of the rectangles divide the plane into several regions. A region is called "good" if and only if its boundary contains a vertex of some rectangle. Prove: The sum of the number of vertices of all good regions is less than $40 n$.
