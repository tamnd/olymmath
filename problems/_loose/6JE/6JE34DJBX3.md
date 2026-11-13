---
tag: 6JE34DJBX3
kind: problem
type: answer
answer: "48"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90653
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A, B, C$ be points in a line on this order, with $A B=B C$. A car travels from $A$ to $B$ at 40 kilometers per hour and then from $B$ to $C$ at 60 kilometers per hour, without stopping in between. What is the overall speed of the trip from $A$ to $C$ ?
