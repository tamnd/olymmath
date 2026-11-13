---
tag: P4PZVWAM5Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a set of points $M$ in the plane is convex if for any two points $A, B \in M$, all the points from the segment $(AB)$ also belong to $M$.
Let $n \ge 2$ be an integer and let $F$ be a family of $n$ disjoint convex sets in the plane. Prove that there exists a line $\ell$ in the plane, a set $M \in F$ and a subset $S \subset F$ with at least $\lceil \frac{n}{12} \rceil $ elements such that $M$ is contained in one closed half-plane determined by $\ell$, and all the sets $N \in S$ are contained in the complementary closed half-plane determined by $\ell$.
