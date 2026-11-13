---
tag: G8KFYMN6QG
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90184
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the digitlength of a positive integer to be the total number of letters used in spelling its digits. For example, since "two zero one one" has a total of 13 letters, the digitlength of 2011 is 13 . We begin at any positive integer and repeatedly take the digitlength. Show that after some number of steps, we must arrive at the number 4.
