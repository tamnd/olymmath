---
tag: DQQ7RX3VXF
kind: problem
type: answer
answer: "9011"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160060
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence of real numbers $\left\{a_{n}\right\}$ defined by $a_{1}=1$ and $a_{n+1}=\frac{a_{n}}{1+n a_{n}}$ for $n \geq 1$.
Find the value of $\frac{1}{a_{2005}}-2000000$.
