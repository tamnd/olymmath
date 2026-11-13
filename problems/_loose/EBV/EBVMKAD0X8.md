---
tag: EBVMKAD0X8
kind: problem
type: answer
answer: (-4, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the recurrence relation
$$a_{n+3}=\frac{a_{n+2}a_{n+1}-2}{a_n}$$
with initial condition $(a_0,a_1,a_2)=(1,2,5)$. Let $b_n=a_{2n}$ for nonnegative integral $n$. It turns out that $b_{n+2}+xb_{n+1}+yb_n=0$ for some pair of real numbers $(x,y)$. Compute $(x,y)$.
