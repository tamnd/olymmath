---
tag: 1SYFRF5A7Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Suppose $m, n \in \mathbf{Z}_{+}, m < n$. Prove:
$$
\begin{array}{l}
\mathrm{C}_{n}^{j}+\mathrm{C}_{n}^{m+j}+\mathrm{C}_{n}^{2 m+j}+\cdots \\
=\frac{2^{n}}{m}\left[1+2 \sum_{k=1}^{\left[\frac{m-1}{2}\right]} \cos ^{n} \frac{k \pi}{m} \cdot \cos \frac{(n-2 j) k \pi}{m}\right],
\end{array}
$$
where, $j=0,1, \cdots, m-1$.
