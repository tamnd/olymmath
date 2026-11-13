---
tag: GY32ACMHHW
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90656
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=447
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are three boxes of stones. Each hour, Sisyphus moves a stones from one box to another. For each transfer of a stone, he receives from Zeus a number of coins equal to the number of stones in the box from which the stone is drawn minus the number of stones in the recipient box, with the stone Sisyphus just carried not counted. If this number is negative, Sisyphus pays the corresponding amount (and can pay later if he is broke).

After 1000 years, all the stones lie in their initial boxes. What is the greatest possible earning of Sisyphus at that moment?
