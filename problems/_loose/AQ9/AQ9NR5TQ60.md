---
tag: AQ9NR5TQ60
kind: problem
type: answer
answer: Yes; for example, define a1 = 1, a2 = 7, and a_{n+1} = (3 a_n)! + 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Does there exist an infinite strictly increasing sequence $a_1, a_2, a_3, \ldots$ of positive integers such that the sum of any two distinct members of the sequence is coprime to the sum of any three its distinct members?
