---
tag: 97VRDTYBGV
kind: problem
type: answer
answer: "2019"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Color the points on a plane in the following way:
(1) Choose any positive integer $m$, let $K_{1}, K_{2}, \cdots, K_{m}$ be different circles with non-zero radii, and $K_{i} \subset K_{j}$ or $K_{j} \subset$ $\mathrm{K}_{i}(i \neq j)$;
(2) The color of any point outside a chosen circle is different from the color of any point inside the circle.

Given that there are 2019 points on the plane, and no three points are collinear. Find the maximum number of colors such that the colors of these points satisfy the conditions.
