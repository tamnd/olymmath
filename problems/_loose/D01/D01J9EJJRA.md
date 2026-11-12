---
tag: D01J9EJJRA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an arbitrary convex polyhedron. We will color its faces blue and red such that no two adjacent faces, i.e., faces sharing a common edge, are colored blue (and each face is colored with one color). Prove that if more than half of all the faces are colored blue in such a coloring, then it is impossible to inscribe a sphere in such a polyhedron. (Note that it seems possible to provide a counterexample to this statement. Inscribing a sphere in a cube and then cutting off all 8 trihedral angles of the cube with planes perpendicular to the cube's diagonals and touching the inscribed sphere, we obtain a tetradecahedron, eight of whose triangular faces are not adjacent to each other and can be colored blue. However, 8 is more than half of 14. How to explain this contradiction?)
