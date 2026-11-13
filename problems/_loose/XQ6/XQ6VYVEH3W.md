---
tag: XQ6VYVEH3W
kind: problem
type: answer
answer: \sqrt{2}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest real number $c$ such that for any positive sequence $\left\{x_{n}\right\}$, if
$$
\begin{array}{l}
x_{1}+x_{2}+\cdots+x_{n} \leqslant x_{n+1}, n=1,2,3, \cdots \text { then } \\
\sqrt{x_{1}}+\sqrt{x_{2}}+\cdots+\sqrt{x_{n}} \leqslant c \sqrt{x_{1}+x_{2}+\cdots+x_{n}}, n=1,2,3, \cdots
\end{array}
$$
