---
tag: F2ZRCH70GH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that a simply-connected polyhedron must have either triangular, quadrilateral, or pentagonal faces. In this case,

a) if the polyhedron has neither quadrilateral nor pentagonal faces, then it must have at least four triangular faces (for example, a regular tetrahedron has neither quadrilateral nor pentagonal faces, but it has four triangular faces);

b) if the polyhedron has neither triangular nor pentagonal faces, then it must have at least six quadrilateral faces (for example, a cube has neither triangular nor pentagonal faces, but it has six quadrilateral faces);

c) if the polyhedron has neither triangular nor quadrilateral faces, then it must have at least 12 pentagonal faces (for example, a regular dodecahedron has neither triangular nor quadrilateral faces, but it has 12 pentagonal faces).

Let a certain polyhedron be given and $\mu$ be its face. By adjacent faces to $\mu$, we mean all faces that share either a common edge or a common vertex with $\mu$.
