---
tag: Y6Y10DRH2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167440
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The point $P_{2}(1 / 2, \sqrt{3} / 2)$ is one of the points that are a unit distance from both points $P_{0}(0,0)$ and $P_{1}(1,0)$ in the plane. Determine the coordinates of the point $P_{3}$ in space that is 1 unit away from $P_{0}$, $P_{1}$, and $P_{2}$, if we choose the perpendicular to the plane of $P_{0}, P_{1}$, $P_{2}$ at $P_{0}$ as the third axis. No coordinate of $P_{3}$ should be negative.

Generally, the points in $n$-dimensional space are given by $(x_{1}, x_{2}, \ldots, x_{n})$ (real) coordinate $n$-tuples, and the distance between the points $(x_{1}, x_{2}, \ldots, x_{n})$ and $(y_{1}, y_{2}, \ldots, y_{n})$ is given by (1). Determine the points $R_{0}, R_{1}, R_{2}, \ldots, R_{n}$ in sequence such that the first $k$ coordinates of $R_{k}$ are positive, the rest are 0, and the distance between any two points is 1.

$$
\sqrt{\left(x_{1}-y_{1}\right)^{2}+\left(x_{2}-y_{2}\right)^{2}+\ldots+\left(x_{n}-y_{n}\right)^{2}}
$$
