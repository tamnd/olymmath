---
tag: GHMKSGZV93
kind: problem
type: answer
answer: f(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=78
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
Find all functions $f: \mathbb{Z}^+ \to \mathbb{Z}^+$ such that $f(k+1) > f(f(k))$ for all $k \ge 1$, where $\mathbb{Z}^+$ is the set of positive integers.
