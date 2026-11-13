---
tag: M6VNTV8SFE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_n)_{n\geq 1}$ be the sequence defined recursively as such: $$x_1=1, \ x_{n+1}=\frac{x_1}{n+1}+\frac{x_2}{n+2}+\cdots+\frac{x_n}{2n} \ \forall n\geq 1.$$Consider the sequence $(y_n)_{n\geq 1}$ such that $y_n=(x_1^2+x_2^2+\cdots x_n^2)/n$ for all $n\geq 1.$ Prove that

- $x_{n+1}^2<y_n/2$ and $y_{n+1}<(2n+1)/(2n+2)\cdot y_n$ for all $n\geq 1;$

- $\lim_{n\to\infty}x_n=0.$
