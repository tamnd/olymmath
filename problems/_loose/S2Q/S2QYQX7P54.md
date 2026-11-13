---
tag: S2QYQX7P54
kind: problem
type: answer
answer: "401"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $k$, we write
$$
(1+x)(1+2 x)(1+3 x) \cdots(1+k x)=a_{0}+a_{1} x+a_{2} x^{2}+\cdots+a_{k} x^{k},
$$
where $a_{0}, a_{1}, \cdots, a_{k}$ are the coefficients of the polynomial. Find the smallest possible value of $k$ if $a_{0}+a_{1}+a_{2}+\cdots+a_{k-1}$ is divisible by 2005 .
