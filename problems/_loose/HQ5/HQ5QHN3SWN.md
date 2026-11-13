---
tag: HQ5QHN3SWN
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite set of polygons in the plane is said to be properly placed if for any two of them, there is a line through the origin that intersects both.

Find the smallest natural number $m$ such that for any properly placed set of polygons, one can draw $m$ lines through the origin so that each polygon in the set intersects at least one of these $m$ lines.
