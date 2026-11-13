---
tag: 222CWNJAAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set of grid points
$$
U=\{(x, y) \mid 0 \leqslant x, y \leqslant 23, x, y \in \mathbf{Z}\} .
$$

Now, connect the grid points in set $U$ sequentially using line segments of length $\sqrt{41}$ with grid points as endpoints, forming a broken line. Is there a connection method such that the broken line starts from the origin, and exactly passes through each grid point in set $U$ once before returning to the origin?
