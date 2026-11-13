---
tag: ATTMRVYD3D
kind: problem
type: answer
answer: 2^{1000}<5^{500}<3^{750}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90321
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=65
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arrange the following number from smallest to largest: $2^{1000}, 3^{750}, 5^{500}$.
