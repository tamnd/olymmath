---
tag: ZSFTA73ARM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90624
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=53
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The rectangle $M N P Q$ is inside the rectangle $A B C D$. The portion of the rectangle $A B C D$ outside of $M N P Q$ is colored in green. Using just a straightedge construct a line that divides the green figure in two parts of equal areas.
