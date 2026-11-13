---
tag: TW2QM3PHXF
kind: problem
type: answer
answer: x_{1}=x_{2}=\cdots=x_{n}=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all non-negative real solutions $\left(x_{1}, x_{2}, \ldots, x_{n}\right)$ of the system of equations

$$
x_{i+1}=x_{i}^{2}-\left(x_{i-1}-1\right)^{2}, i=1,2, \ldots, n
$$

(Indices are taken cyclically modulo $n$.)
