---
tag: 6XQRCJMV7M
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
Let $n$ be a positive integer. We have $2n+1$ (not necessarily distinct) nonzero integers with a nonzero sum. One needs to put them in places of the stars into an expression $*x^{2n} + *x^{2n-1} + \cdots + *x + *$ so that the resulting polynomial would have no integer root. Is it always possible?
