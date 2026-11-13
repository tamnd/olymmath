---
tag: YAWQXJCNVR
kind: problem
type: answer
answer: f(x) = x for all real x; f(x) = -x for all real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ satisfying the following conditions:
(i) there is at most one number $a$ such that $f(a) = 0,$
(ii) $f(f(x+y)f(x-y) + 25xy + y^2) = 24yf(x) + xf(x+y)$ for all real $x, y$.
