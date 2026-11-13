---
tag: DD5WGZ3J0V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
C10 (13-6, Sweden) Let $A=\left(a_{i j}\right)(i, j=1,2, \cdots, n)$ be a square matrix with non-negative integer elements, and suppose that for any $a_{i j}=0$, the sum of the elements in the $i$-th row and the $j$-th column is not less than $n$. Prove: the sum of all elements of this square matrix is not less than $\frac{1}{2} n^{2}$.
Proof Let
$$
\begin{aligned}
R_{i} & =\sum_{j=1}^{n} a_{i j}, i=1,2, \cdots, n, \\
C_{j} & =\sum_{i=1}^{n} a_{i j}, j=1,2, \cdots, n,
\end{aligned}
$$

represent the row sum of the $i$-th row and the column sum of the $j$-th column of this square matrix, respectively. And let
$$
p=\min \left\{R_{1}, R_{2}, \cdots, R_{n}, C_{1}, C_{2}, \cdots, C_{n}\right\}
$$
