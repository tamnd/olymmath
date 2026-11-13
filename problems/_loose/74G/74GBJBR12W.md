---
tag: 74GBJBR12W
kind: problem
type: answer
answer: (4,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90250
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the four points $A=(2,4), B=(0,0), C=(6,0)$, and $D=(6,3)$ in the plane. For which point $P$ in the plane is the sum $P A+P B+P C+P D$ minimized?
