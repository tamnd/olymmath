---
tag: JGXSQMNF7C
kind: problem
type: answer
answer: "1092"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{a_{n}\right\}$, let $S_{n}=\sum_{i=1}^{n} a_{i}$ $\left(n \in \mathbf{Z}_{+}\right)$, with the convention: $S_{0}=0$. It is known that
$$
a_{k}=\left\{\begin{array}{ll}
k, & S_{k-1}<k ; \\
-k, & S_{k-1} \geqslant k
\end{array}\left(1 \leqslant k \leqslant n, k, n \in \mathbf{Z}_{+}\right)\right. \text {. }
$$

Find the largest positive integer $n$ not exceeding 2019 such that
$$
S_{n}=0 .
$$
