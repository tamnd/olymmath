---
tag: ZBQW0VQQWH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ points on a circle, such that each line segment connecting two points is either red or blue.
$P_iP_j$ is red if and only if $P_{i+1} P_{j+1}$ is blue, for all distinct $i, j$ in $\left\{1, 2, ..., n\right\}$.

(a) For which values of $n$ is this possible?
(b) Show that one can get from any point on the circle to any other point, by doing a maximum of 3 steps, where one step is moving from a point to another point through a red segment connecting these points.
