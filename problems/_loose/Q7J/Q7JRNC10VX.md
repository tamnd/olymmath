---
tag: Q7JRNC10VX
kind: problem
type: answer
answer: f(x) = 0 and f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \to \mathbb{R}$ such that for all real numbers $x, y$,
$$f(x+y)^3 = (x+2y)f(x^2) + f(f(y))(x^2+3xy+y^2).$$
