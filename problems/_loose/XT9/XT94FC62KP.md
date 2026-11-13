---
tag: XT94FC62KP
kind: problem
type: answer
answer: "1530150"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A simple graph $G$ on 2020 vertices has its edges colored red and green. It turns out that any monochromatic cycle has even length. Given this information, what is the maximum number of edges $G$ could have?
