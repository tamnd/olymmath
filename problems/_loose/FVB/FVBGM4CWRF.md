---
tag: FVBGM4CWRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208216
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2010
    source: hf-mathnet
    label: Ukraine 50th Mathematical Olympiad in Ukraine, Fourth Round (March 23, 2010)
---
The given parabola $y=ax^2+bx+c$ doesn't intersect the $X$-axis and passes from the points $A(-2,1)$ and $B(2,9)$. Find all the possible values of the $x$ coordinates of the vertex of this parabola.
