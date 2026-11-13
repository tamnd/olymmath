---
tag: DNKZ37KDPX
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n(n>2)$ points on a plane, satisfying that no three points are collinear. Draw a line through any two points, and mark the point among the remaining points that is closest to this line (it is known that in any case, the point satisfying this condition is unique). Question: For each given $n$, what is the maximum number of points that can be marked?
