---
tag: 1BXCQ9BZ6K
kind: problem
type: answer
answer: A=5,B=2orA=1,B=6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90306
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The five-digit number $9 A 65 B$ is divisible by 36 , where $A$ and $B$ are digits. Find all possible values of $A$ and $B$.
