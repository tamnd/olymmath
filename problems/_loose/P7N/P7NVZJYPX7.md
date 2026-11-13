---
tag: P7NVZJYPX7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250967
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=95
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions
---
Points $A ,B ,C ,D$ lie on a line in this order. Draw parallel lines $a$ and $b$ through $A$ and $B$, respectively, and parallel lines $c$ and $d$ through $C$ and $D$, respectively, such that their points of intersection are vertices of a square. Prove that the side length of this square does not depend on the length of segment $BC$.
