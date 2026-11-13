---
tag: YMVDMV2CPA
kind: problem
type: answer
answer: x = a or x = b
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 55rd Ukrainian National Mathematical Olympiad - Third Round
---
Solve the equation for arbitrary distinct reals $a$, $b$, $c$:
$$
x^3 a - x a^3 + a^3 b - a b^3 + b^3 x - b x^3 = (x-a)(x-b)(x-c)(a-b).
$$
