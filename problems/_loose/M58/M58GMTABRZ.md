---
tag: M58GMTABRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Keeping the previous notations, show that the point $M$ belongs to the line (AD) if, and only if, the points B, F, E, C are concyclic.

We conclude this section with another useful property of the Miquel point, which allows us to find the center of a similarity given a segment and its image. We recall
that a direct similarity with center $\mathrm{O}$ is the composition of a rotation and a homothety (both centered at $\mathrm{O}$) and that if $\mathrm{ABCD}$ is not a parallelogram, there exists a unique direct similarity mapping $A$ to $B$ and $C$ to $D$.

Theorem 3.31. Let $A, B, C, D$ be four points in the plane such that $(A C)$ and (BD) are not parallel. Let $X$ be the intersection point of the lines (AC) and (BD). Let O be the second intersection point of the circumcircles of triangles $A B X$ and CDX. Then O is the center of the direct similarity mapping $A$ to $C$ and $B$ to $D$, as well as the center of the direct similarity mapping $A$ to $B$ and $C$ to $D$.
