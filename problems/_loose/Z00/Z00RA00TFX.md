---
tag: Z00RA00TFX
kind: problem
type: answer
answer: "-2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the real parameter $p$ such that the equation $x^2 + (p^2 + 1)x + p = 2$ has two real distinct roots $x_1$ and $x_2$ such that
$$
\frac{2x_1 - 1}{x_2} + \frac{2x_2 - 1}{x_1} = x_1x_2 + \frac{55}{x_1x_2}.
$$
