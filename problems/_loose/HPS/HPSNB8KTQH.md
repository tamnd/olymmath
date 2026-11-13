---
tag: HPSNB8KTQH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Label the four vertices of a tetrahedron as $1, 2, 3, 4$. Now divide it into several smaller tetrahedra in such a way that any two of these smaller tetrahedra either have no common points, or share only one point, or share only one edge (not part of an edge), or share only one base (not part of a base).

All newly generated vertices are labeled as $1, 2, 3, 4$ in the following manner: each vertex on an edge of the original tetrahedron is labeled with one of the numbers at the endpoints of that edge; each vertex inside a face of the original tetrahedron is labeled with one of the labels of the three vertices of that face; each vertex inside the original tetrahedron is labeled with any of $1, 2, 3, 4$.

Prove: There exists a small tetrahedron whose four vertices are labeled exactly as $1, 2, 3, 4$.
