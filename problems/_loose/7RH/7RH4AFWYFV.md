---
tag: 7RH4AFWYFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231637
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXXI Brazilian Math Olympiad
---
Let $ A$ be one of the two points of intersection of two circles with centers $ X, Y$ respectively.The tangents at $ A$ to the two circles meet the circles again at $ B, C$. Let a point $ P$ be located so that $ PXAY$ is a parallelogram. Show that $ P$ is also the circumcenter of triangle $ ABC$.
