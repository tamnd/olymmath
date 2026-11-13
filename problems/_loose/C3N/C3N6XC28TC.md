---
tag: C3N6XC28TC
kind: problem
type: answer
answer: '[(3, 14), (14, 3), (2, 20), (20, 2), (1, 35), (35, 1)]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Find all pairs of positive integers $(a, b)$ for which
$$
\binom{a+1}{2} \binom{b+1}{2} = 630.
$$
