---
tag: NQ9ZGT63Z4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189476
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each vertex of a regular $n$-gon $A_{1} A_{2} \ldots A_{n}$ there is a unique pawn. In each step it is allowed:

1. to move all pawns one step in the clockwise direction or
2. to swap the pawns at vertices $A_{1}$ and $A_{2}$.

Prove that by a finite series of such steps it is possible to swap the pawns at vertices:
a) $A_{i}$ and $A_{i+1}$ for any $1 \leqslant i<n$ while leaving all other pawns in their initial place
b) $A_{i}$ and $A_{j}$ for any $1 \leqslant i<j \leqslant n$ leaving all other pawns in their initial place.

(Matija Bucić)
