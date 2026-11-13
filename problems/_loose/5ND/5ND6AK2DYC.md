---
tag: 5ND6AK2DYC
kind: problem
type: answer
answer: S_{n}<2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{a_{n}\right\}$,
$$
\begin{array}{l}
a_{1}=1, \\
a_{n}=\frac{n}{n-1} a_{n-1}+2 n \times 3^{n-2}(n \in \mathbf{N}, n \geqslant 2) .
\end{array}
$$
(1) Find the general term $a_{n}$;
(2) Let $b_{n}=\frac{a_{n+1}}{n+1}\left(n \in \mathbf{Z}_{+}\right)$, prove: The sum of the first $n$ terms of the sequence $\left\{\frac{2 b_{n}}{\left(b_{n}-1\right)^{2}}\right\}$ is $S_{n}<2$.
