---
tag: PSTJKRCAAY
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that
$$
x+(1+x)^{2}+(1+x)^{3}+\ldots+(1+x)^{n}=a_{0}+a_{1} x+a_{2} x^{2}+\ldots+a_{n} x^{n},
$$
where each $a$, is an integer, $r=0,1,2, \ldots, n$.
Find the value of $n$ such that $a_{0}+a_{2}+a_{3}+a_{4}+\ldots+a_{n-2}+a_{n-1}=60-\frac{n(n+1)}{2}$.
