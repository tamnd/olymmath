---
tag: 5E3Z2K9ZHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $k$ dolls, placed on each vertex of a $k$-sided regular polygon. We are going to move them.
At each step, one doll may jump over another doll, i.e. its new location will be the mirror image of its current location with respect to the other doll.
For which integers $k \geq 3$ is it possible to perform a series of such moves, so that in the end the dolls form a $k$-sided regular polygon of different size?
