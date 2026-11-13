---
tag: WDTCY27WN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given several red points and several blue points, connect some of them with line segments. If among the points connected to point $P$, the points of a different color from $P$ are more than half, then $P$ is called a "singular point". If $P$ is a "singular point", then change the color of $P$ (from red to blue if it was originally red, and from blue to red if it was originally blue). Prove: After a finite number of such operations, there will be no "singular points" left.
