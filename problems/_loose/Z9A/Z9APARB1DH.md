---
tag: Z9APARB1DH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205148
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jp-jmo
    source: hf-mathnet
    label: Japan Japan Mathematical Olympiad
---
In the $xy$-plane, points with integer coordinates ranging from $1$ to $2000$ for both the $x$ and $y$ coordinates are called good points. Moreover, for any four points $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3), D(x_4, y_4)$ satisfying the following conditions, the polyline $ABCD$ is called a $\mathbb{Z}$-shaped polyline.

- All $A, B, C, D$ are good points.

- $x_1<x_2$, $y_1=y_2$

- $x_2>x_3$, $y_2-x_2=y_3-x_3$

- $x_3<x_4$, $y_3=y_4$

Find the smallest possible positive integer $n$ such that $\mathbb{Z}$-shaped polylines $Z_1, Z_2,\dots, Z_n$ satisfy the following condition: for any good point $P$, there exists an integer $i$ between $1$ and $n$ inclusive such that $P$ lies on $Z_i$.
