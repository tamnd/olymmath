---
tag: YEC5MH0N7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Given any real numbers $a_{1}, a_{2}, b_{1}, b_{2}$, and positive numbers $p_{1}, p_{2}, q_{1}, q_{2}$. Prove that in the $2 \times 2$ matrix
$$
\left(\begin{array}{ll}
\frac{a_{1}+b_{1}}{p_{1}+q_{1}} & \frac{a_{1}+b_{2}}{p_{1}+q_{2}} \\
\frac{a_{2}+b_{1}}{p_{2}+q_{1}} & \frac{a_{2}+b_{2}}{p_{2}+q_{2}}
\end{array}\right)
$$

there is a number that is both the maximum in its row and the minimum in its column.
(2) Given any real numbers $a_{1}, a_{2}, \cdots, a_{m}, b_{1}, b_{2}, \cdots, b_{n}$ and positive numbers $p_{1}, p_{2}, \cdots, p_{m}$, $q_{1}, q_{2}, \cdots, q_{n}$. Construct an $m \times n$ matrix such that the number at the intersection of the $i$-th row and the $j$-th column is
$$
\frac{a_{i}+b_{j}}{p_{i}+q_{j}}, i=1,2, \cdots, m, j=1,2, \cdots, n .
$$

Prove that in this matrix there is a number that is both the maximum in its row and the minimum in its column.
