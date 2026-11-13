---
tag: QCJT4KWM3R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the distance matrix of graph $G$
$$
\boldsymbol{D}=\left[\begin{array}{cccccc}
\infty & 1 & 2 & \infty & \infty & \infty \\
\infty & \infty & 1 & 3 & \infty & 7 \\
\infty & \infty & \infty & 1 & 2 & \infty \\
\infty & \infty & \infty & \infty & \infty & 3 \\
\infty & \infty & \infty & \infty & \infty & 6 \\
\infty & \infty & \infty & \infty & \infty & \infty
\end{array}\right]_{6 \times 6}
$$

Find the shortest distance between any two points.
