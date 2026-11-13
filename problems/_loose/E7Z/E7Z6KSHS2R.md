---
tag: E7Z6KSHS2R
kind: problem
type: answer
answer: \frac{7}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $\left(x_{n}\right)$ and $\left(y_{n}\right)$ are given with initial terms $x_{1}=1$ and $y_{1}=2$ and the recurrence relations

$$
x_{n}=y_{n-1}+x_{n-1} \text { and } y_{n}=y_{n-1}-x_{n-1} \text { for all } n \geq 2 \text {. }
$$

(a) Prove that $y_{n} \neq 0$ for every natural number $n$.

(b) Let $a_{n}=\frac{x_{n}}{y_{n}}$. Calculate the sum of all distinct numbers that are terms of the sequence $\left(a_{n}\right)$.
