---
tag: J7GRBK0CZ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h379406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44024
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1993
    source: hf-ai-mo-aops
    label: 1993 Iran MO (2nd round)
---
Let $ABC$ be an acute triangle with sides and area equal to $a, b, c$ and $S$ respectively. Prove or disprove that a necessary and sufficient condition for existence of a point $P$ inside the triangle $ABC$ such that the distance between $P$ and the vertices of $ABC$ be equal to $x, y$ and $z$ respectively is that there be a triangle with sides $a, y, z$ and area $S_1$ , a triangle with sides $b, z, x$ and area $S_2$ and a triangle with sides $c, x, y$ and area $S_3$ where $S_1 + S_2 + S_3 = S.$
