---
tag: YMD8DAF902
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-mathnet
    label: China China-TST-2025A
---
A finite point set $P = \{(x_i, y_i) \mid i = 1, 2, \dots, n\}$ in the plane is called **sparse** if for any $1 \le i < j \le n$,
$$
|x_i - x_j| \cdot |y_i - y_j| \ge 1.
$$
(1) Let $\{Q_1, Q_2, Q_3\}$ be a sparse set where no $Q_i$ lies inside the axis-aligned rectangle with the other two points as diagonal vertices. Prove that the area of triangle $Q_1Q_2Q_3$ is at least $\frac{\sqrt{5}}{2}$.

(2) Let $P$ be a sparse set with no three collinear points, all lying inside an axis-aligned square of side length $a$. Prove that the number of points in $P$ does not exceed
$$
\frac{a^2}{\sqrt{5}} + 2a + 1.
$$
