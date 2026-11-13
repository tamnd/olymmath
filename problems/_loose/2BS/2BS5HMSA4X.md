---
tag: 2BS5HMSA4X
kind: problem
type: answer
answer: 'a) Yes: for example, P(x) = -x with c = 1. b) No: such a polynomial and integer do not exist.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist an integer $c$ and a polynomial $P(x)$ with integer coefficients for which $P(c) \neq c$, but $P(P(c)) = c$?
