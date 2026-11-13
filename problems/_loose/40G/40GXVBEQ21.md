---
tag: 40GXVBEQ21
kind: problem
type: answer
answer: \frac{F_{n+1}}{F_{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each integer $n \geqslant 2$, determine the maximum value of the sum $a_{0}+a_{1}+a_{2}+\cdots+a_{n}$ satisfying the conditions $a_{0}=1, a_{i} \geqslant a_{i+1}+a_{i+2}, i=0$. $1, \cdots, n-2$ (where $a_{0}, a_{1}, \cdots a_{n}$ are non-negative).
