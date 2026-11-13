---
tag: S2ZHC8YH29
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{array}{l}
\text { Three. (50 points) Let } \\
D=\left\{(i, j) \in \mathbf{Z}^{2} \mid 1 \leqslant i, j \leqslant n\right\} .
\end{array}
$$

Let $[x]$ denote the greatest integer not exceeding the real number $x$.
Prove: There exists $S \subset D$, satisfying
$$
|S| \geqslant\left[\frac{3}{5} n(n+1)\right],
$$

such that for any $\left(x_{1}, y_{1}\right), \left(x_{2}, y_{2}\right) \in S$, we have
$$
\left(x_{1}+x_{2}, y_{1}+y_{2}\right) \notin S .
$$
