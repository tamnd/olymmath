---
tag: ZYR0HZBM14
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A spatial figure is formed by $n$ points and $l$ line segments connecting these points, where
$$
n=q^{2}+q+1, l \geqslant \frac{1}{2} q(q+1)^{2}+1, q \geqslant 2, q \in \mathbf{N} .
$$

It is known that no four points are coplanar, each point has at least one line segment, and there exists a point with at least $q+2$ line segments.
Prove: The figure must contain a spatial quadrilateral (i.e., a figure formed by four points $A, B, C, D$ and four line segments $A B, B C, C D$, $D A$).
