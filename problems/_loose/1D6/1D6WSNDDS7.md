---
tag: 1D6WSNDDS7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place a pebble at each *non-positive* integer point on the real line, and let $n$ be a fixed positive integer. At each step we choose some n consecutive integer points, remove one of the pebbles located at these points and rearrange all others arbitrarily within these points (placing at most one pebble at each point).
Determine whether there exists a positive integer $n$ such that for any given $N > 0$ we can place a pebble at a point with coordinate greater than $N$ in a finite number of steps described above.
