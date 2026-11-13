---
tag: WGMCEA5WGN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91214
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2019
    source: hf-mathnet
    label: Switzerland SMO 2019
---
Let $A B C$ be a triangle with $\angle C A B=2 \cdot \angle A B C$. Assume that a point $D$ exists inside the triangle $A B C$ such that $A D=B D$ and $C D=A C$. Show that $\angle A C B=3 \cdot \angle D C B$.
