---
tag: 2Y75EAAFHZ
kind: problem
type: answer
answer: It cannot be factored; for every positive integer n the polynomial is irreducible over the integers.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=70
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
For any positive integer $n$, determine (with proof) if the polynomial
$$
f(x) = (x^2 + x)^{2n} + 1
$$
can be factored into a product of two non-constant polynomials with integer coefficients.
