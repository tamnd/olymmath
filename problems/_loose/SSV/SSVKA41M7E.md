---
tag: SSVKA41M7E
kind: problem
type: answer
answer: n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Let $n$ be a positive integer. There are $2n + 2$ points in a plane such that no three of the points lie on the same line. A line in the plane is a *divider*, if two of the given points lie on this line and there are exactly $n$ points on each of the two sides. Find the greatest possible $m$ for which there are always at least $m$ dividers in the plane.
