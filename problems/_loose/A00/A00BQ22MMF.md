---
tag: A00BQ22MMF
kind: problem
type: answer
answer: AL^2 = AE \times AD
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204025
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 62nd Ukrainian National Mathematical Olympiad, Third Round, First Tour
---
Let $AL$ be the inner bisector of triangle $ABC$. The circle centered at $B$ with radius $BL$ meets the ray $AL$ at points $L$ and $E$, and the circle centered at $C$ with radius $CL$ meets the ray $AL$ at points $L$ and $D$. Show that $AL^2 = AE\times AD$.

*(Proposed by Mykola Moroz)*
