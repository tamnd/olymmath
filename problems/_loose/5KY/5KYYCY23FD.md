---
tag: 5KYYCY23FD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=a_{5} x^{5}+a_{4} x^{4}+a_{3} x^{3}+a_{2} x^{2}+a_{1} x+a_{0}$,
$$
\begin{array}{l}
g(x)=b_{3} x^{3}+b_{2} x^{2}+b_{1} x+b_{0}, \\
h(x)=c_{2} x^{2}+c_{1} x+c_{0}
\end{array}
$$

be polynomials with integer coefficients, and $\left|a_{1}\right| \leqslant 4,\left|b_{i}\right| \leqslant 1,\left|c_{i}\right| \leqslant 1$ (for all $i$), $f(10)=g(10) \cdot h(10)$. Prove: $f(x)=g(x) h(x)$.
