---
tag: ZAVFCC2NYQ
kind: problem
type: answer
answer: n^{2}-n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n(n>1)$, $n$ real numbers $x_{1}, x_{2}$, $\cdots, x_{n}$ satisfy $x_{1}, x_{2}, \cdots, x_{n} \in[0, n]$, and
$$
x_{1} x_{2} \cdots x_{n}=\left(n-x_{1}\right)\left(n-x_{2}\right) \cdots\left(n-x_{n}\right) \text {. }
$$

Determine the maximum value of $y=x_{1}+x_{2}+\cdots+x_{n}$.
