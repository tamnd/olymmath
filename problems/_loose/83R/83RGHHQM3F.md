---
tag: 83RGHHQM3F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let two sets of real numbers $a_{1}, a_{2}, \cdots, a_{n} ; b_{1}, b_{2}, \cdots, b_{n}$ satisfy the conditions:
$$
\begin{array}{c}
a_{1} \leqslant b_{1}, \\
a_{1}+a_{2} \leqslant b_{1}+b_{2}, \\
\ldots \ldots
\end{array}
$$
$$
\begin{array}{c}
a_{1}+a_{2}+\cdots+a_{n} \leqslant b_{1}+b_{2}+\cdots+b_{n}, \\
0 \leqslant a_{i+1} \leqslant a_{i}, i=1,2, \cdots, n-1,
\end{array}
$$

Prove: $a_{1}^{2}+a_{2}^{2}+\cdots+a_{n}^{2} \leqslant b_{1}^{2}+b_{2}^{2}+\cdots+b_{n}^{2}$.
