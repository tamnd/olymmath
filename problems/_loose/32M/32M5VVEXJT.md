---
tag: 32M5VVEXJT
kind: problem
type: answer
answer: f(x) = cx
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $f$ with real coefficients such that for all reals $x, y, z$ such that $x+y+z =0$, the following relation holds: $$f(xy) + f(yz) + f(zx) = f(xy + yz + zx).$$
