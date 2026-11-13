---
tag: 8AWP2NGXF2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer. Consider an $n \times n$ grid. Some cells of the grid are colored white, and others are colored black. The vertices of the grid that have an odd number of black cells around them are colored red. Let $Y$ be the number of red vertices.

Jean plays with this grid: he can choose a rectangle whose sides are edges of the grid and change the color of all the cells within this rectangle: white cells become black and black cells become white. Let $X$ be the minimum number of operations Jean must perform to make the grid entirely white. Show that:

$$
\frac{Y}{4} \leqslant X \leqslant \frac{Y}{2}
$$
