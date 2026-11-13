---
tag: Z2DEKAGS8W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95012
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rearrangement Inequality Let there be two ordered arrays:
$$
a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n}, b_{1} \leqslant b_{2} \leqslant \cdots \leqslant b_{n} .
$$

Let $i_{1}, i_{2}, \cdots, i_{n}$ be any permutation of $1,2, \cdots, n$, then
$$
\begin{aligned}
& a_{1} b_{n}+a_{2} b_{n-1}+\cdots+a_{n} b_{1} \\
\leqslant & a_{1} b_{i_{1}}+a_{2} b_{i_{2}}+\cdots+a_{n} b_{i_{n}} \\
\leqslant & a_{1} b_{1}+a_{2} b_{2}+\cdots+a_{n} b_{n},
\end{aligned}
$$
(Reverse Order Sum)
(Disordered Sum)
(Ordered Sum)
Equality holds if and only if $a_{1}=a_{2}=\cdots=a_{n}$ or $b_{1}=b_{2}=\cdots=b_{n}$.
