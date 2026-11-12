---
tag: XVCBSHNK21
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The bisector of triangle $ABM$ serves as its height, so $AB = BM = MC \equiv x$, and also $AL: LC = AB: BC = 1: 2$, from which $AL \equiv y$ and $CL = 2y$. Further, we have

$$
\frac{S_{ABM}}{S_{ABL}} = \frac{S_{ACM}}{S_{BCL} / 2} = \frac{x \cdot 3y}{2x \cdot 2y / 2} = \frac{3}{2} \Rightarrow S_{ABM} = \frac{3}{2} \cdot 10 = 15
$$
