---
tag: BN4RNETCHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence $P_{1}, P_{2}, \ldots$ of points in the plane such that $P_{1}, P_{2}, P_{3}$ are non-collinear and for every $n \geq 4, P_{n}$ is the midpoint of the line segment joining $P_{n-2}$ and $P_{n-3}$. Let $L$ denote the line segment joining $P_{1}$ and $P_{5}$. Prove the following:

- The area of the triangle formed by the points $P_{n}, P_{n-1}, P_{n-2}$ converges to zero as $n$ goes to infinity.

- The point $P_{9}$ lies on $L$.
