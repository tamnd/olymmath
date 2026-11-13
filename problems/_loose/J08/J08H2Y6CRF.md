---
tag: J08H2Y6CRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145677
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f\left(n_{1}, n_{2}, \cdots, n_{r}\right)$ denote the number of permutations (called alternating permutations) of $n_{1}$ $a_{1}$'s, $n_{2}$ $a_{2}$'s, $\cdots$, $n_{r}$ $a_{r}$'s in which no two adjacent elements are the same, then
$$
\begin{array}{l}
f\left(n_{1}, n_{2}, \cdots, n_{r}\right) \\
=\sum_{\substack{1 \leqslant t_{i} \leqslant n_{i} \\
i=1,2, \cdots, r}} \prod_{i=1}^{r}(-1)^{n_{i}-t_{i}}\binom{n_{i}-1}{t_{i}-1} \frac{\left(t_{1}+t_{2}+\cdots+t_{r}\right)!}{t_{1}!t_{2}!\cdots t_{r}!} .
\end{array}
$$
