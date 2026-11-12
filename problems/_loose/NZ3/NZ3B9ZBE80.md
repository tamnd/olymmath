---
tag: NZ3B9ZBE80
kind: problem
type: answer
answer: x_{n}=x_{0}\frac{4^{n-1}}{3^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the numerical sequence $x_{0}, x_{1}, \ldots, x_{n}, x_{n+1}, \ldots$ the relations $2 x_{n}=x_{0}+x_{1}+\cdots+x_{n-1}-x_{n}$ hold for all $n=0,1,2, \ldots$ Find each term $x_{n}$ of such a sequence and the values of the sums $S_{n}=$ $x_{0}+x_{1}+\cdots+x_{n}$.
