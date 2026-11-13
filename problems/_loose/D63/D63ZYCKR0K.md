---
tag: D63ZYCKR0K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let non-empty subsets $A_{1}, A_{2}, \cdots, A_{k}$ be a cover of $X$, and the union of any $k-1$ of $A_{1}, A_{2}, \cdots, A_{k}$ is a proper subset of $X$, then this cover is called a reduced cover. Let $I_{(n, k)}$ denote the number of reduced covers of an $n$-element set $X$ consisting of $k$ sets. Prove:
$$
\begin{array}{c}
I_{(n, k)}=\sum_{j=k}^{n} C_{n}^{\prime}\left(2^{k}-k-1\right)^{n-1} S_{(1, k)} ; \\
I_{(n, n-1)}=\frac{1}{2} n\left(2^{n}-n-1\right) ; \\
I_{(n, 2)}=S_{(n+1,3)} .
\end{array}
$$
