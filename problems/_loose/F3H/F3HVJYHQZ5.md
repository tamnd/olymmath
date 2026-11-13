---
tag: F3HVJYHQZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the Cartesian plane, an integer point is a point with integer coordinates. If $n$ is a positive integer, let $f(n)$ be the number of integer points that lie on the segment connecting the origin to the integer point $(n, n+3)$, excluding the endpoints. Show that:

$$
f(n)=\left\{\begin{array}{lll}
2 & \text { if } & n \text { is a multiple of } 3 \\
0 & \text { if } & n \text { is not a multiple of } 3 .
\end{array}\right.
$$
