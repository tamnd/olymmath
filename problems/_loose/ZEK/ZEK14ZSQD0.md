---
tag: ZEK14ZSQD0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247178
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=148
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Let $ABC$ be an arbitrary triangle. A circle passes through $B$ and $C$ and intersects the lines $AB$ and $AC$ at $D$ and $E$, respectively. The projections of the points $B$ and $E$ on $CD$ are denoted by $B'$ and $E'$, respectively. The projections of the points $D$ and $C$ on $BE$ are denoted by $D'$ and $C'$, respectively. Prove that the points $B',D',E'$ and $C'$ lie on the same circle.
