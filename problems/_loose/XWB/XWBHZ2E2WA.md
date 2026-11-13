---
tag: XWBHZ2E2WA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188481
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Junior Macedonian Mathematical Olympiad
---
Given a regular hexagon with side 1. Inside the hexagon, there are $m$ points such that no three of them are collinear. The hexagon is divided into triangles, with each of the given $m$ points and each vertex of the hexagon being a vertex of a division triangle. Division triangles do not have a common interior point. Prove that there exists a division triangle whose area is not greater than $\frac{3 \sqrt{3}}{4(m+2)}$.
