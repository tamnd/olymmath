---
tag: VREVTSHR65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75139
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=51
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 63rd Czech and Slovak Mathematical Olympiad
---
In the plane, two circles $k_{1}\left(S_{1}, r_{1}\right)$ and $k_{2}\left(S_{2}, r_{2}\right)$ are given, where $\left|S_{1} S_{2}\right|>r_{1}+r_{2}$. Find the set of all points $X$ that do not lie on the line $S_{1} S_{2}$ and have the property that the segments $S_{1} X, S_{2} X$ intersect the circles $k_{1}, k_{2}$ in points whose distances from the line $S_{1} S_{2}$ are equal.
