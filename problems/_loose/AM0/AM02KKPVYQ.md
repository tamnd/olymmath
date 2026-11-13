---
tag: AM02KKPVYQ
kind: problem
type: answer
answer: All pairs of consecutive natural numbers, i.e., |n − m| = 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=198
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
Find all natural numbers $n$, $m$ that satisfy conditions: $(n + m + 1)|2mn$ and $(n + m - 1)|(n^2 + m^2 - 1)$.
