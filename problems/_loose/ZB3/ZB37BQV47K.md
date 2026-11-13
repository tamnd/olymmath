---
tag: ZB37BQV47K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90760
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=0
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a certain island, there are knights, who always tell the truth, knaves, who always lie, and spies, who could do either. Suppose you meet three people, and you know one is a knight, one is a knave, and one is a spy, but you don't know which is which.

Find a method to ask three yes/no questions, each to one of the three people, so you can determine for sure which is which. You may question the same person multiple times, and your questions can depend on answers to previous questions.
