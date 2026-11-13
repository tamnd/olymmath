---
tag: 73TCSJKWVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163116
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2016
    source: hf-mathnet
    label: Slovenia Slovenija 2016
---
Let $A B C$ be an acute-angled triangle and $D$ a point inside this triangle such that $\angle B A D = \angle D C B$ and $\angle C B D = \angle D A C$. Prove that the lines $A D$ and $B C$ are perpendicular.
