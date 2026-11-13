---
tag: T8H0EMAFYG
kind: problem
type: answer
answer: "41"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots$ be a sequence of numbers defined by

$$
\begin{aligned}
a_{1} & =1 \\
a_{n+1} & =\sqrt{a_{n}^{2}-2 a_{n}+3}+1 \text { for all } n \in \mathbb{N}
\end{aligned}
$$

Determine $a_{801}$.
