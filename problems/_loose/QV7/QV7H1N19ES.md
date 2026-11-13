---
tag: QV7H1N19ES
kind: problem
type: answer
answer: "2007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m, n$ be integers such that $1<m \leq n$. Define
$$
f(m, n)=\left(1-\frac{1}{m}\right) \times\left(1-\frac{1}{m+1}\right) \times\left(1-\frac{1}{m+2}\right) \times \ldots \times\left(1-\frac{1}{n}\right) .
$$

If $S=f(2,2008)+f(3,2008)+f(4,2008)+\ldots+f(2008,2008)$, find the value of $2 S$
