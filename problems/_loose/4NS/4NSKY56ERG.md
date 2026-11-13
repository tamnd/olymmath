---
tag: 4NSKY56ERG
kind: problem
type: answer
answer: Bobwins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90703
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aerith and Bob take turns picking a nonnegative integer, each time changing exactly one digit from the other's last number. The first person to pick a number that (s)he picked before loses. If Aerith goes first, and both play optimally, who wins?

(Note: There are no leading zeroes, except in the number 0 itself. For instance, if one person picks 2020, the other could respond by picking $0020=20$, however the reverse does not hold.)
