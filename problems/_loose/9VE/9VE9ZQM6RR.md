---
tag: 9VE9ZQM6RR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=22651
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 49th Mathematical Olympiad in Ukraine
---
On the chord $A B$ of a circle, a point $P$ is marked such that $A P=2 P B$. The chord $D E$ is perpendicular to $A B$ and passes through point $P$. Prove that the midpoint of segment $A P$ is the orthocenter of triangle $A E D$.
