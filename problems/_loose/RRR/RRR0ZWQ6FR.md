---
tag: RRR0ZWQ6FR
kind: problem
type: answer
answer: (-1)^{\frac{n-r}{2}}2^{r-n}C_{n}^{\frac{n-r}{2}}(n-riseven),0(n-risodd)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n, r$ are positive integers, and $n \geqslant r$, then
$$
\sum_{i=0}^{n-r}(-2)^{-i} C_{n}^{r+i} C_{n+r+i}^{i}=\left\{\begin{array}{l}
(-1)^{\frac{n-r}{2}} 2^{r-n} C_{n}^{n-r}(n-r \text { is even }), \\
0(n-r \text { is odd }) .
\end{array}\right.
$$
