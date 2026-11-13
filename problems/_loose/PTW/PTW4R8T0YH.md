---
tag: PTW4R8T0YH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262554
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmnt
    source: hf-mathnet
    label: United States HMMT November
---
Triangle $ABC$ has $AB = 4$, $BC = 5$, and $CA = 6$. Points $A'$, $B'$, $C'$ are such that $B'C'$ is tangent to the circumcircle of $ABC$ at $A$, $C'A'$ is tangent to the circumcircle at $B$, and $A'B'$ is tangent to the circumcircle at $C$. Find the length $B'C'$.
