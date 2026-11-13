---
tag: RTYN1XGPBQ
kind: problem
type: answer
answer: A valid example is the 171-digit number consisting of 90 ones followed by 81 nines.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina Nacional OMA
---
Para todo número entero positivo $n$, sea $S(n)$ la suma de los dígitos de $n$. Hallar, si existe, un número entero positivo $n$ de 171 dígitos tal que 7 divide a $S(n)$ y 7 divide a $S(n+1)$.
