---
tag: FKPHS022EW
kind: problem
type: answer
answer: f(x) = x for all positive integers x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $S$ be the set of positive integers. Determine all functions $f: S \to S$ such that $x^2 + f(y)$ divides $f(x)^2 + y$ for every pair of positive integers $x$ and $y$.
