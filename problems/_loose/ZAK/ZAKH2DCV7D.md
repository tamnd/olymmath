---
tag: ZAKH2DCV7D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Rioplatense Mathematical Olympiad, Level 3
    url: https://artofproblemsolving.com/community/c6h423462
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27546
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2006
    source: hf-ai-mo-aops
    label: 2006 Rioplatense Mathematical Olympiad, Level 3
---
A given finite number of lines in the plane, no two of which are parallel and no three of which are concurrent, divide the plane into finite and infinite regions. In each finite region we write $1$ or $-1$ . In one operation, we can choose any triangle made of three of the lines (which may be cut by other lines in the collection) and multiply by $-1$ each of the numbers in the triangle. Determine if it is always possible to obtain $1$ in all the finite regions by successively applying this operation, regardless of the initial distribution of $1$ s and $-1$ s.
