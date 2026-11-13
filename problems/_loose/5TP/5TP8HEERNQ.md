---
tag: 5TP8HEERNQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that ${a_n}$ and ${b_n}$ are two sequences of integers defined by
\begin{align*}
a_1=1, a_2=10, a_{n+1}=2a_n+3a_{n-1} & ~~~\text{for }n=2,3,4,\ldots, \\
b_1=1, b_2=8, b_{n+1}=3b_n+4b_{n-1} & ~~~\text{for }n=2,3,4,\ldots.
\end{align*}

Prove that, besides the number $1$, no two numbers in the sequences are identical.
