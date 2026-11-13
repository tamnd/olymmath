---
tag: HAE6PRY6SP
kind: problem
type: answer
answer: \kappa_{n}=\frac{(1-(n-1)\lambda^{3})^{2}}{(1-(n-1)\frac{\lambda^{2}}{2})^{3}}\cdot\kappa_{1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider the number $\kappa=V^{2} / F^{3}$ for any convex polyhedron, where $V$ is the volume of the polyhedron, and $F$ is its surface area. How does this number change as we go through the following 5 polyhedra:

1. the regular tetrahedron $A B C D$;
2. cut off from it the tetrahedron $A A_{1} A_{2} A_{3}$, where $A_{1}, A_{2}, A_{3}$ are the points on the edges $A B, A C, A D$ respectively, such that $A A_{1} / A B=A A_{2} / A C=A A_{3} / A D=\lambda \leqq 1 / 2$

3 - 5. successively cut off from the remainder the similarly defined tetrahedra $B B_{1} B_{2} B_{3}$, then $C C_{1} C_{2} C_{3}$, and finally $D D_{1} D_{2} D_{3}$.
