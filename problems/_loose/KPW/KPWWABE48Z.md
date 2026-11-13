---
tag: KPWWABE48Z
kind: problem
type: answer
answer: "4021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209297
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rmm/2011
    source: hf-mathnet
    label: Romania 2011 Fourth ROMANIAN MASTER OF MATHEMATICS
---
The cells of a square $2011 \times 2011$ array are labelled with the integers $1,2,\ldots, 2011^2$, in such a way that every label is used exactly once. We then identify the left-hand and right-hand edges, and then the top and bottom, in the normal way to form a torus (the surface of a doughnut).
Determine the largest positive integer $M$ such that, no matter which labelling we choose, there exist two neighbouring cells with the difference of their labels at least $M$.
(Cells with coordinates $(x,y)$ and $(x',y')$ are considered to be neighbours if $x=x'$ and $y-y'\equiv\pm1\pmod{2011}$, or if $y=y'$ and $x-x'\equiv\pm1\pmod{2011}$.)

*(Romania) Dan Schwarz*
