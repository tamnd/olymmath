---
tag: VWNS8DJ700
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) On a plane, there are five points $A, B, C, D, E$, none of which are collinear. Prove that among them, one can choose four points that are the vertices of a convex quadrilateral.

b) Inside a square $A_{1} A_{2} A_{3} A_{4}$, there is a convex quadrilateral $A_{5} A_{6} A_{7} A_{8}$; inside $A_{5} A_{6} A_{7} A_{8}$, a point $A_{9}$ is taken. Prove that if out of the nine points $A_{1}, A_{2}, \ldots, A_{9}$, no three are collinear, then one can choose five of them that lie at the vertices of a convex pentagon.

Note. One can prove that if generally on a plane there are any nine points (no three of which are collinear), then one can choose five points that are the vertices of a convex pentagon; on the other hand, one can indicate such eight points on the plane that no five of these points are the vertices of a convex pentagon. Similarly, one can prove that the smallest number of points on a plane (no three of which are collinear), from which one can always choose 6 that are the vertices of a convex hexagon, is 17. (Note that proving this statement is quite complex.) There is a conjecture that the smallest number $N$ such that from $N$ points on a plane, no three of which are collinear, one can always choose $n$ that are the vertices of a convex $n$-gon, is given by the formula

$$
N=2^{n-2}+1
$$

(for $n=3,4,5,6$ we get $N=3,5,9,17$); however, this conjecture has not yet been proven or disproven.
