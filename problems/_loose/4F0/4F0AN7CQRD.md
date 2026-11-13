---
tag: 4F0AN7CQRD
kind: problem
type: answer
answer: \text{None}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241739
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Japan/train/0000.parquet#row=176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jp-jjmo
    source: hf-mathnet
    label: Japan Japan Junior Mathematical Olympiad
---
There is a convex pentagon $ABCDE$, and the quadrilateral $ABCD$ is a square. Show that when $\angle AEC+\angle BED=180^o$, the pentagon $ABCDE$ is cyclic.

A pentagon whose interior angles are all less than $180^o$ is called a convex pentagon.
