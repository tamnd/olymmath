---
tag: GXBPS9VS9R
kind: problem
type: answer
answer: 0,\\frac{\sqrt{2}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a real number, and the sequence $a_{1}, a_{2}, \cdots$ satisfies:
$$
\begin{array}{l}
a_{1}=a, \\
a_{n+1}=\left\{\begin{array}{ll}
a_{n}-\frac{1}{a_{n}}, & a_{n} \neq 0 ; \\
0, & a_{n}=0
\end{array}(n=1,2, \cdots) .\right.
\end{array}
$$

Find all real numbers $a$ such that for any positive integer $n$, we have $\left|a_{n}\right|<1$.
(Li Shenghong)
