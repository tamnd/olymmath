---
tag: TPRK8ZCHFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XII OBM
---
Given that $f(x) = \frac{ax+b}{cx+d}$, $f(0) \neq 0$, $f(f(0)) \neq 0$. Let $F(x) = \underbrace{f(\dots(f(x)\dots))}_{n \text{ times}}$. If $F(0) = 0$, show that $F(x) = x$ for all $x$ where the expression is defined.
