---
tag: 6QT038NQGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In space, there are 200 points. Each pair of them is connected by a segment, and the segments do not intersect each other. Two players have $k$ colors of paint at their disposal. The first player paints each segment in one of the $k$ colors, then the second player paints each point in one of the same colors. If there are two points and the segment between them, all painted in the same color, the first player wins; otherwise, the second player wins. Prove that the first player can guarantee a win if a) $k=7$, b) $k=10$.
