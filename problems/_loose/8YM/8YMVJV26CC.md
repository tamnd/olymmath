---
tag: 8YMVJV26CC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: There exists a positive constant $c$ with the following property: for any integer $n>1$, and any set $S$ of $n$ points in the plane, if the distance between any two points in $S$ is at least 1, then there exists a separating line $l$ such that the distance from each point in $S$ to the line $l$ is at least $c n^{-\frac{1}{3}}$. A line $l$ is said to separate the point set $S$ if and only if some line segment with endpoints in $S$ intersects $l$.

Note: If a weaker estimate $c n^{-\alpha}$ is proven, points will be awarded based on the value of $\alpha > \frac{1}{3}$.
