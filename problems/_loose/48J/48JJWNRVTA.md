---
tag: 48JJWNRVTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$:
$$
\begin{array}{l}
a_{1}=a_{2}=5, \\
a_{n+1}=a_{n}+6 a_{n-1}\left(n \geqslant 2, n \in \mathbf{Z}_{+}\right) .
\end{array}
$$

Prove: (1) $\left\{a_{n}-3 a_{n-1}\right\}$ is a geometric sequence, and find the general term formula of the sequence $\left\{a_{n}\right\}$;
(2) $\frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{n}}<\frac{1}{2}$.
