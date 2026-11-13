---
tag: MPDJQVSRAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230490
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-mathnet
    label: Belarus Belorusija 2012
---
Two distinct points $A$ and $B$ are marked on the left half of the parabola $y = x^2$. Consider any pair of parallel lines which pass through $A$ and $B$ and intersect the right half of the parabola at points $C$ and $D$. Let $K$ be the intersection point of the diagonals $AC$ and $BD$ of the obtained trapezoid $ABCD$. Let $M, N$ be the midpoints of the bases of $ABCD$. Prove that the difference $KM - KN$ depends only on the choice of points $A$ and $B$ but does not depend on the pair of parallel lines described above.

(I. Voronovich)
