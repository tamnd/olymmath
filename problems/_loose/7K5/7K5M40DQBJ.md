---
tag: 7K5M40DQBJ
kind: problem
type: answer
answer: f(n) = n for all natural n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Find all functions $f : \mathbb{N} \to \mathbb{N}$ such that $f(m^3 + f(n)) = f(m)^3 + n$, $\forall n, m \in \mathbb{N}$.
