---
tag: YDX1QXAQAF
kind: problem
type: answer
answer: "96915"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(x_{n}\right)_{n \in \mathbb{N}}$ is defined by $x_{1}=16, x_{2}=3, x_{3}=2019$ and, for $n \in \mathbb{N}$,

$$
x_{n+3}= \begin{cases}x_{n}-\frac{1}{x_{n+1} x_{n+2}}, & \text { for } x_{n+1}, x_{n+2} \neq 0 \\ 0, & \text { otherwise }\end{cases}
$$

Prove that there exists a natural number $n$ such that $x_{n}=0$, and determine the smallest such $n$.
