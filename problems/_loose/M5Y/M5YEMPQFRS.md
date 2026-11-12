---
tag: M5YEMPQFRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23010
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a convex polyhedron, let B, P, and T denote the number of vertices, edges, and the maximum number of triangular faces that share a common vertex, respectively. Prove that $B \sqrt{P+T} \geqslant 2P$.

For example, for a tetrahedron ( $B=4, P=6, T=3$ ), the equality holds, while for a triangular prism ( $B=6, P=9, T=1$ ) or a cube ( $B=8, P=12, T=0$ ), the inequality is strict.

(O.N. Kosukhin)
