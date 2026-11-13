---
tag: 42CFFHJNMX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221942
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
In a circle $O$, there are six points, $ A$, $ B$, $C$, $D$, $E$, $F$ in a counterclockwise order such that $BD \perp CF$ , and $CF$, $BE$, $AD$ are concurrent. Let the perpendicular from $B$ to $AC$ be $M$, and the perpendicular from $D$ to $CE$ be $N$. Prove that $AE \parallel MN$.
