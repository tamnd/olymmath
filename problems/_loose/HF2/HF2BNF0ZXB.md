---
tag: HF2BNF0ZXB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We draw segments in the plane in such a way that three endpoints of segments are never aligned. In one operation, we can choose two intersecting segments $[A B]$ and $[C D]$. We then "uncross" them by replacing them with $[A C]$ and $[B D]$. Prove that only a finite number of such operations can be performed.
