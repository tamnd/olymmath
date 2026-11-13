---
tag: VHAZN5GY86
kind: problem
type: answer
answer: x_{k}=\frac{1}{2^{n}-1}\sum_{i=1}^{n}2^{i-1}\lambda_{k-1+i},k=1,2,\cdots,n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $\lambda_{i} \in \mathbf{R}_{+}(i=1,2, \cdots, n)$. Try to find all positive real solutions $x_{1}, x_{2}, \cdots, x_{n}$ of the equation
$$
\sum_{i=1}^{n} \frac{\left(x_{i}+\lambda_{i}\right)^{2}}{x_{i+1}}=4 \sum_{i=1}^{n} \lambda_{i}
$$
(Here $x_{n+1}=x_{1}$ ).
(Xiao Zhengang)
