---
tag: JHRPRFRR98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Definition:

Let $d(X, Y)$ denote the distance between two points $X, Y$ of a point set $m$. A real number $d$ is called the diameter of $m$ if the following conditions are satisfied:

(1) For any two points $X, Y$ in $m$, $d(X, Y) \leq d$.

(2) There exist points $P, Q$ in $m$ such that $d(P, Q) = d$.

Prove:

a) If a circular disk with diameter $d$ is divided into two parts by any polygonal chain that intersects the circumference at points $M$ and $N$, then one of these partial areas (each including its boundary) also has the diameter $d$.

b) If a sphere with diameter $d$ is divided into two parts by a plane $\epsilon_{1}$ and then one of these parts is further divided into two parts by another plane $\epsilon_{2}$, then in any such division of the sphere into three parts, at least one of these parts (each including its boundary surfaces) also has the diameter $d$.
