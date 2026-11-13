---
tag: 4G3Q9RCB1W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162852
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Let $ABC$ be an acute triangle with $|AB| > |BC| > |AC|$. Let $D$ be a point on the segment $BC$ different from $C$ such that $|AC| = |AD|$. Let $H$ be the orthocenter of triangle $ABC$, and let $A_1$ and $B_1$ be the feet of the altitudes from $A$ and $B$, respectively. The lines $A_1B_1$ and $DH$ intersect at point $E$. Prove that points $B, D, B_1$, and $E$ are concyclic.
