---
tag: V615EV3RXC
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ dots on the plane such that no three dots are collinear. Each dot is assigned a $0$ or a $1$. Each pair of dots is connected by a line segment. If the endpoints of a line segment are two dots with the same number, then the segment is assigned a $0$. Otherwise, the segment is assigned a $1$. Find all $n$ such that it is possible to assign $0$'s and $1$'s to the $n$ dots in a way that the corresponding line segments are assigned equally many $0$'s as $1$'s.
