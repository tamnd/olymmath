---
tag: MM0BG11ZR4
kind: problem
type: answer
answer: f(n) = n^3 - 1 for all n in N_0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Z, N_0$ be the sets of all integers and non-negative integers respectively.
Find all increasing functions $f : N_0 \to Z$ such that
$$
f(2) = 7, f(mn) = f(m) + f(n) + f(m)f(n), \forall m, n \in N_0.
$$
