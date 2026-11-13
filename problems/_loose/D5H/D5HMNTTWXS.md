---
tag: D5HMNTTWXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247353
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a positive integer *balanced * if the number of its distinct prime factors is equal to the number of its digits in the decimal representation; for example, the number $385 = 5 \cdot 7 \cdot 11$ is balanced, while $275 = 5^2 \cdot 11$ is not. Prove that there exist only a finite number of balanced numbers.
