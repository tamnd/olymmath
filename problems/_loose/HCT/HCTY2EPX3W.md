---
tag: HCTY2EPX3W
kind: problem
type: answer
answer: BK
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230515
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $ABC$. Let $S$ be the circle passing through $C$, centered at $A$. Let $X$ be a variable point on $S$ and let $K$ be the midpoint of the segment $CX$ . Find the locus of the midpoints of $BK$, when $X$ moves along $S$.

(I. Gorodnin)
