---
tag: N8NS5DGK0Y
kind: problem
type: answer
answer: f(n) = n for all positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Z}_{>0} \to \mathbb{Z}_{>0}$ for which $f(n) \mid f(m) - n$ if and only if $n \mid m$ for all natural numbers $m$ and $n$.
