---
tag: XX1CC3N2TX
kind: problem
type: answer
answer: (n+1)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=45384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An arbitrary square $S$ of size $n \times n$ on the coordinate plane covers $(n+1)^{2}$ integer points (points where both coordinates $x$ and $y$ are integers) if one of its corners is at an integer point and its sides are parallel to the coordinate axes. Intuitively prove the obvious result that, regardless of its placement, this square $S$ will cover no more than $(n+1)^{2}$ points.
