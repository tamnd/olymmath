---
tag: GK36XR91HQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230467
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus Belarusian Mathematical Olympiad
---
Points $L$ and $H$ are marked on the sides $AB$ of an acute-angled triangle ABC so that $CL$ is a bisector and $CH$ is an altitude. Let $P,Q$ be the feet of the perpendiculars from $L$ to $AC$ and $BC$ respectively. Prove that $AP \cdot BH = BQ \cdot AH$.

I. Gorodnin
