---
tag: PG1SRS1PEA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90173
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Several positive integers are written on the blackboard. You can erase any two numbers and write their greatest common divisor (GCD) and least common multiple (LCM) instead. Prove that eventually the numbers will stop changing.
