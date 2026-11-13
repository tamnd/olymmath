---
tag: 3BQ18QFBM6
kind: problem
type: answer
answer: 1/sqrt(2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl
    source: hf-mathnet
    label: Balkan Mathematical Olympiad Balkan Mathematical Olympiad Shortlisted Problems
---
A rabbit is at some point $(x, y)$ in the Euclidean plane. There are some (possibly infinitely many) landmines, which are circles with any radius that do not intersect except possibly at one point (tangent). Every move, the rabbit can hop a distance of exactly $1$, but cannot land in the interior of a landmine (but may possibly land on the edge). Suppose that neither the rabbit nor the origin is in a landmine. Find the minimum $\varepsilon$ so that the rabbit can always reach a point with a distance of at most $\varepsilon$ from the origin, regardless of the landmine configuration.
