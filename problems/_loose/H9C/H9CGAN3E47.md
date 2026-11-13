---
tag: H9CGAN3E47
kind: problem
type: answer
answer: 2n^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $4n$ points in the plane, with no three points collinear. Using these points as vertices, we form $\binom{4n}{3}$ triangles. Show that there exists a point $X$ of the plane that belongs to the interior of at least $2n^3$ of these triangles.
