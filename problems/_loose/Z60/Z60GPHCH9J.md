---
tag: Z60GPHCH9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25965
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a rectangular grid of $m \times n$, each cell can be either alive or dead. Every minute, all living cells die simultaneously, and those dead cells that had an odd number of living neighbors (by side) come to life. Indicate all pairs ( $m, n$ ) for which there exists an initial arrangement of living and dead cells such that life in the rectangle will continue indefinitely (i.e., at every moment, at least one cell will be alive).
