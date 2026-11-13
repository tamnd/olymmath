---
tag: 7A4FDZ3H3V
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=12
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines AREA STAGE
---
A change from Cartesian to polar coordinates involves the following transformation: $x=r \cos \theta$ and $y=r \sin \theta$. For a circle with polar equation $r=\binom{m}{n} \cos \theta$, where $1 \leq n \leq m \leq 6$, how many distinct combinations of $m$ and $n$ will this equation represent a circle of radius greater than or equal to $5 ?$
