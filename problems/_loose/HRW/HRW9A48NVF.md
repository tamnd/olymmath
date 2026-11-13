---
tag: HRW9A48NVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206002
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=28
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle with $90^\circ \ne \angle A \ne 135^\circ$. Let $D$ and $E$ be external points to the triangle $ABC$ such that $DAB$ and $EAC$ are isoscele triangles with right angles at $D$ and $E$. Let $F = BE \cap CD$, and let $M$ and $N$ be the midpoints of $BC$ and $DE$, respectively.

Prove that, if three of the points $A$, $F$, $M$, $N$ are collinear, then all four are collinear.
