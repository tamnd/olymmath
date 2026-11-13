---
tag: CDJPZ7ZKYB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2015
    url: https://artofproblemsolving.com/community/c6h3057462
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57154
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2015
    source: hf-ai-mo-aops
    label: Russian TST 2015
---
Let $0<\alpha<1$ be a fixed number. On a lake shaped like a convex polygon, at some point there is a duck and at another point a water lily grows. If the duck is at point $X{}$ , then in one move it can swim towards one of the vertices $Y$ of the polygon a distance equal to a $\alpha\cdot XY$ . Find all $\alpha{}$ for which, regardless of the shape of the lake and the initial positions of the duck and the lily, after a sequence of adequate moves, the distance between the duck and the lily will be at most one meter.
