---
tag: RWH738XNDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90542
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aerith has written down two letters on a piece of paper. Bob will pick a positive integer and she'll try to factor Bob's positive integer into two others, such that when spelled in English, one contains her first letter and the other her second.

For example, if Aerith had chosen letters "v" and "w" and Bob chose "ten", she could spell it out as "five" times "two," but would fail if Bob chose "twenty".

Show that there is a unique pair of letters Aerith can choose that allows her to succeed no matter what number Bob picks.
