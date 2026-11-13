---
tag: TDRCXF6FPF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232425
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is an acute triangle $ABC$ with incenter $I$ and the incircle touches $BC, CA, AB$ at $D, E, F$. The circle with center $C$ and radius $CE$ meets $EF$ for the second time at $K$. If $X$ is the $C$-excircle touchpoint with $AB$, show that $CX, KD, IF$ concur.
