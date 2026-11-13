---
tag: TE90QTHAT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Find all functions $f: \mathbb{Z} \to \mathbb{Z}$ such that $f(x+y)[(f(x)-f(y))^2+f(xy)] = f(x^3)+f(y^3)$.
