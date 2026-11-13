---
tag: 3TDK97G5JF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sequences $\left(x_{n}\right)$ and $\left(y_{n}\right)$ are defined recursively:

$$
\begin{aligned}
x_{1} & =3, y_{1}=1 \\
x_{n+1} & =3 x_{n}+y_{n}, \text { for all } n \in \mathbb{N} \\
y_{n+1} & =x_{n}+3 y_{n}, \text { for all } n \in \mathbb{N}
\end{aligned}
$$

Prove that $x_{2017}^{2}-y_{2017}^{2}=8^{2017}$.
