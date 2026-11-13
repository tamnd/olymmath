---
tag: PM1J6QKCYR
kind: problem
type: answer
answer: "101"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that a function $M(n)$, where $n$ is a positive integer, is defined by
$$
M(n)=\left\{\begin{array}{ll}
n-10 & \text { if } n>100 \\
M(M(n+11)) & \text { if } n \leq 100
\end{array}\right.
$$

How many solutions does the equation $M(n)=91$ have?
