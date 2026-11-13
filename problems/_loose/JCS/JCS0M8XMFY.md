---
tag: JCS0M8XMFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204532
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a triangle $ABC$. Let the points $P$ and $Q$ be on the sides $AB, AC$, respectively, so that $AP=AQ$, and $PQ$ passes through the incenter $I$. Let $(BPI)$ meet $(CQI)$ at $M$, $PM$ meets $BI$ at $D$ and $QM$ meets $CI$ at $E$. Prove that the line $MI$ passes through the midpoint of $DE$.
