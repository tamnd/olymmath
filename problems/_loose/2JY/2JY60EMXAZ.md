---
tag: 2JY60EMXAZ
kind: problem
type: answer
answer: \lfloor\frac{n}{2}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a natural number. Depending on $n$, find the largest natural number $d$ such that there exists a permutation $a_{1}, a_{2}, \ldots, a_{n}$ of the numbers $1,2, \ldots, n$ with

$$
\left|a_{i}-a_{i+1}\right| \geq d, \text { for } i=1,2, \ldots, n-1
$$
