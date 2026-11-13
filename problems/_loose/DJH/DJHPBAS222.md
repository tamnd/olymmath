---
tag: DJHPBAS222
kind: problem
type: answer
answer: All functions of the form f(n) = (n^3 - n)/3 + k n for any integer k.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XVI Olimpiada Matemática Rioplatense
---
Encuentre todas las funciones $f: \mathbb{Z} \rightarrow \mathbb{Z}$ con la siguiente propiedad:
$$
\text{Si } x + y + z = 0, \text{ entonces } f(x) + f(y) + f(z) = xyz .
$$
