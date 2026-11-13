---
tag: X5QFA1SBDN
kind: problem
type: answer
answer: (x-2)^{2}+(y-3)^{2}=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154234
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=102
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
Find the equation of a circle, in the form $(x-h)^{2}+(y-k)^{2}=r^{2}$, inscribed in a triangle whose vertex are located at the points $(-2,1),(2,5),(5,2)$.
