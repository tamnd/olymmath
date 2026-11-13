---
tag: ZD7N8V64GN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180260
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube
    source: hf-mathnet
    label: Romania The DANUBE Mathematical Competition
---
Show that for any real numbers $a_{1}, a_{2}, \ldots, a_{n}, n \in \mathbb{N}^{*}$, there exists a real number $x$ such that the numbers $x+a_{1}, x+a_{2}, \ldots, x+a_{n}$ are irrational.
