---
tag: J850EXBJFA
kind: problem
type: answer
answer: f(0)=0; f(x)=1 for 0<x<2; and for n>=1, f(x) = -2^{n+2} + (3^{n+2}+1)/2 for x in [2^n, 2^{n+1}).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Determine all functions $f:[0, \infty) \rightarrow \mathbb{R}$ such that $f(0)=0$ and
$$
f(x)=1+5 f\left(\left\lfloor\frac{x}{2}\right\rfloor\right)-6 f\left(\left\lfloor\frac{x}{4}\right\rfloor\right)
$$
for all $x>0$.
