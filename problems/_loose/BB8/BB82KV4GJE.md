---
tag: BB82KV4GJE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $6\times 6$ square consisting of unit squares, denote its rows and columns from $1$ to $6$. Figure *p-horse* can move from square $(x; y)$ to $(x'; y')$ if and only if both $x + x'$ and $y + y'$ are primes. At the start the *p-horse* is located in one of the unit squares.
$a)$ Can the *p-horse* visit every unit square exactly once?
$b$) Can the *p-horse* visit every unit square exactly once and with the last move return to the initial starting position?
