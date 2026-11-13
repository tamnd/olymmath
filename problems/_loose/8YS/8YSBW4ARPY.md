---
tag: 8YSBW4ARPY
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
\begin{aligned}
f(x)= & a_{2020} x^{2020}+a_{2019} x^{2019}+\cdots+ \\
& a_{2018} x^{2018}+a_{1} x+a_{0},
\end{aligned}
$$

where, $a_{i} \in \mathbf{Z}, i=0,1, \cdots, 2020$. Find the number of ordered pairs $(n, p)$ (where $p$ is a prime) that satisfy $p^{2}<n<2020$, and for any $i=0,1, \cdots, n, \mathrm{C}_{n}^{i}+f(i)$ is congruent modulo $p$.
