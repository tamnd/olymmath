---
tag: K32K27RQSS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, A_{2}, \ldots, A_{n}$ be $n$ consecutive points on a straight line; we will assume that $A_{1} A_{n}=1$ and define some number $a$ (where $0 \leqslant a \leqslant 1$). What is the maximum possible number of those from $C_{n}^{2}=\frac{n(n-1)}{2}$ segments $A_{i} A_{j}$ (where $i, j=1,2, \ldots$ or $n$), whose length is $\geqslant a$?

As for the general estimate of the number $N(a, n)$ of diameters of a planar or spatial $n$-point set, we know very little. Of course, if $n$ is small, then determining the number $N^{\prime}(a, n)$ is not difficult: for example, it is easy to understand that if $N_{k}(a, n)$ is the maximum number of $a$-diameters of a system of $n$ points located in $k$-dimensional Euclidean space (so that the corresponding planimetric and stereometric problems consist in determining the values of $N_{2}(a, n)$ and $N_{3}(a, n)$), then for all $a$

$$
N_{2}(a, 3)=3, N_{3}(a, 4)=6
$$

and even generally

$$
N_{k}(a, n)=C_{n}^{2}\left(=\frac{n(n-1)}{2}\right) \text { for all } a \text { and all } n \leqslant k+1
$$

For other small values of $n$, the values of $N_{2}(a, n)$ and $N_{3}(a, n)$ are also computable.
