---
tag: SRS3V4ZJGJ
kind: problem
type: answer
answer: I_X \in MN
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216063
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo
    source: hf-mathnet
    label: North Macedonia Junior Balkan Mathematical Olympiad
---
A trapezoid $ABCD$ ($AB || CF$,$AB > CD$) is circumscribed.The incircle of the triangle $ABC$ touches the lines $AB$ and $AC$ at the points $M$ and $N$,respectively.Prove that the incenter of the trapezoid $ABCD$ lies on the line $MN$.
