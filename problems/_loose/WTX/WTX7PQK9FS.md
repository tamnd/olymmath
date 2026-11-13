---
tag: WTX7PQK9FS
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of points $M$ in the plane satisfies the following conditions:
(a) No three points are collinear;
(b) Each point in $M$ can be colored either red or blue such that every triangle with vertices of the same color has at least one point of the other color inside it.

Determine the maximum possible number of elements in $M$.
