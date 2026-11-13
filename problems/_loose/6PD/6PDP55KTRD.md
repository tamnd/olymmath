---
tag: 6PDP55KTRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
3-75 Let the sequence $u_{0}, u_{1}, u_{2}, \cdots$ be defined as follows:
$$
\begin{array}{l}
u_{0}=2, u_{1}=\frac{5}{2}, \\
u_{n+1}=u_{n}\left(u_{n-1}^{2}-2\right)-u_{1}, n=1,2, \cdots
\end{array}
$$

Prove that $\left[u_{n}\right]=2^{\frac{2^{n}-(-1)^{n}}{3}}, n=1,2, \cdots$
where $[x]$ denotes the greatest integer not exceeding $x$.
