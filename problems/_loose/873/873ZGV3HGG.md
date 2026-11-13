---
tag: 873ZGV3HGG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the following distance matrix
$$
\boldsymbol{D}=\left[\begin{array}{ccccc}
\infty & 5 & 3 & 4 & 6 \\
5 & \infty & 2 & 10 & 9 \\
3 & 2 & \infty & 8 & 7 \\
4 & 10 & 8 & \infty & 1 \\
6 & 9 & 7 & 1 & \infty
\end{array}\right]
$$

Use two methods to find its TSP solution.
