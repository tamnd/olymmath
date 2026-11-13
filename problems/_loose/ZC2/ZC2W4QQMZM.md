---
tag: ZC2W4QQMZM
kind: problem
type: answer
answer: Yes. For example, P(x) = 1011x^2 + 2x works.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist a polynomial $P(x)$ of second degree with integer coefficients such that the leading coefficient is not divisible by $2022$ and all numbers $P(1), P(2), \dots, P(2022)$ give different residues mod $2022$?
