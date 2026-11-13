---
tag: M9QRAJRNA7
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90191
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two points on the plane with $A B=7$. What is the set points $P$ such that $P A^{2}=P B^{2}-7$ ?
