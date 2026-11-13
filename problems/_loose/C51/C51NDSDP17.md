---
tag: C51NDSDP17
kind: problem
type: answer
answer: "1998"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of numbers $t_{1}, t_{2}, t_{3}, \ldots$ has its terms defined by $t_{n}=\frac{1}{n}-\frac{1}{n+2}$ for every integer $n \geq 1$. For example, $t_{4}=\frac{1}{4}-\frac{1}{6}$. What is the largest positive integer $k$ for which the sum of the first $k$ terms (that is, $t_{1}+t_{2}+\cdots+t_{k-1}+t_{k}$ ) is less than 1.499?
(A) 2000
(B) 1999
(C) 2002
(D) 2001
(E) 1998
