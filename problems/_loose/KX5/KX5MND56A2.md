---
tag: KX5MND56A2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
I. Let's place the regular tetrahedron model FBJK on a horizontal tabletop such that the vertex $K$ of the base triangle $BJK$ is facing us, with $B$ to its left and $J$ to its right, and $F$ above $K$. How many ways can an identical model with vertices labeled $P, Q, R, S$ be placed on the tabletop so that each of its edges is parallel to an edge of the FBJK model? List these positions by specifying which vertex is at the top, to the left, to the right, and in the center at the front.

II. We allow the second tetrahedron to be rotated in the following two ways: - 1. Rotate around the axis connecting the top vertex to the center of the base triangle, by $120^{\circ}$, in the positive rotational direction when viewed from above the model; 2. Rotate around the axis connecting the left vertex to the center of the opposite triangle, by $120^{\circ}$, in the positive rotational direction when viewed from the vertex towards the triangle. Denote these two rotations by $\varphi_{1}$ and $\varphi_{2}$, respectively.

Show that the tetrahedron can be moved from any position described in I. to any other position by applying $\varphi_{1}$ and $\varphi_{2}$, in some order, at most 4 times.

III. Can the $P Q R S$ tetrahedron be moved from any position described in I. to any other position if neither $\varphi_{1}$ nor $\varphi_{2}$ can be applied twice in a row?
