---
tag: 5G0QZWDYX1
kind: problem
type: answer
answer: \beta=\alpha-1,\quad=\frac{1}{\sqrt[\alpha-1]{\alpha-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha \in \boldsymbol{N}, \boldsymbol{\alpha} \geq 3$. Consider the sequence of real numbers $\left(a_{n}\right)_{n \in N}$ with the properties $a_{0} \in(0,1)$ and $a_{n+1}=a_{n}-a_{n}^{\alpha}, \forall n \in \boldsymbol{N}$.

a) Show that the sequence $\left(a_{n}\right)_{n \in N}$ is convergent and has the limit 0.

b) Determine $\beta \in N, \beta \geq 2$ such that the sequence $\left(b_{n}\right)_{n \in N}$ given by $b_{n}=\sqrt[\beta]{n} \cdot a_{n}, \forall n \in N$ is convergent and has a limit in $(0,+\infty)$.
