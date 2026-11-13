---
tag: 7YF87D4YRW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227724
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Nordic_Mathematical_Olympiad/train/0000.parquet#row=43
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be a convex quadrilateral. We assume that there exists a point $P$ inside the quadrilateral such that
the areas of the triangles $ABP, BCP, CDP$, and $DAP$ are equal. Show that at least one of the diagonals of the
quadrilateral bisects the other diagonal.
