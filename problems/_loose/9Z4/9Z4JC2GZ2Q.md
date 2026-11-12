---
tag: 9Z4JC2GZ2Q
kind: problem
type: answer
answer: 25,24
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $m$ be the number of excavators in the first and second teams, the productivity of each excavator $1, t-$ the working time of the first team. Then

$$
\left\{\begin{array}{l}
n t=m\left(t+\frac{1}{2}\right) \\
n t=(n+5)(t-2) \\
n, m \in \mathbb{N}
\end{array}\right.
$$

Eliminating the variable $t$, we get $4 n^{2}-4 n m+20 n-25 m=0$. From which

$$
m=n-\frac{5}{4}+\frac{125}{4(4 n+25)} \Longleftrightarrow 4 m=4 n-5+\frac{125}{4 n+25}
$$

Since $n-$ is a natural number, then $4 n+25=125$.
