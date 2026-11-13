---
tag: 6J5MVVM0M0
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
\begin{array}{l}
a_{1}=6, a_{2}=20, \\
a_{n}\left(a_{n}-8\right)=a_{n-1} a_{n+1}-12 .
\end{array}
$$

Let $\{x\}=x-[x]$, where $[x]$ denotes the greatest integer not exceeding the real number $x$. Find the value of $\lim _{n \rightarrow+\infty}\left\{\sqrt{a_{n}}\right\}$.
