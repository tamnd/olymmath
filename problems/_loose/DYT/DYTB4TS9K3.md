---
tag: DYTB4TS9K3
kind: problem
type: answer
answer: "261"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220959
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider all $2^{20}$ paths of length $20$ units on the coordinate plane starting from point $(0, 0)$ going only up or right, each one unit at a time. Each such path has a unique *bubble space*, which is the region of points on the coordinate plane at most one unit away from some point on the path. The average area enclosed by the bubble space of each path, over all $2^{20}$ paths, can be written as $\tfrac{m + n\pi}{p}$ where $m, n, p$ are positive integers and $\gcd(m, n, p) = 1$. Find $m + n + p$.
