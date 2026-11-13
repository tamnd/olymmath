---
tag: C3CGV0PR9F
kind: problem
type: answer
answer: 3alln\geqslant5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89096
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence is recursively defined as:

$$
\begin{gathered}
a_{1}=1, a_{2}=3 \\
a_{n}=(n+1) a_{n-1}-n a_{n-2} \text { for } n \geqslant 3
\end{gathered}
$$

Determine all natural numbers $n$ for which $a_{n}$ is divisible by 9.
