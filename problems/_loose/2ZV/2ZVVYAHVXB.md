---
tag: 2ZVVYAHVXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a set $M$ of $n(n \geqslant 4)$ points in the plane satisfy that no three points are collinear. Initially, these points are connected by $n$ segments such that each point in set $M$ is an endpoint of exactly two segments. Each operation selects two segments $A B$ and $C D$ that have a common interior point. At this time, if $A C$ and $B D$ have not appeared, then replace $A B$ and $C D$ with $A C$ and $B D$ respectively. Prove: the number of operations is less than $\frac{n^{3}}{4}$.
