---
tag: 4DGTMBZ687
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90821
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Squares $A B D E, B C F G$ and $C A H I$ are drawn exterior to a triangle $A B C$. Parallelograms $D B G X, F C I Y$ and $H A E Z$ are completed. Prove that $\angle A Y B+\angle B Z C+$ $C X A=90^{\circ}$.
