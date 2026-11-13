---
tag: GVCQ2Y8FBY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We want to place $2012$ pockets, including variously colored balls, into $k$ boxes such that

**i)** For any box, all pockets in this box must include a ball with the same color
or
**ii)** For any box, all pockets in this box must include a ball having a color which is not included in any other pocket in this box

Find the smallest value of $k$ for which we can always do this placement whatever the number of balls in the pockets and whatever the colors of balls.
