---
tag: TJ48WRJX86
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145245
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exists a set $S$ of $3^{1000}$ points in the plane such that for each point $P$ in $S$, there are at least 2000 points in $S$ whose distance to $P$ is exactly 1 inch.
