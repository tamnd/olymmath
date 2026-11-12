---
tag: 5GVW04Y7GA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1899480
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1984 Tournament Of Towns
---
Consider the $4(N-1)$ squares on the boundary of an $N$ by $N$ array of squares. We wish to insert in these squares $4 (N-1)$ consecutive integers (not necessarily positive) so that the sum of the numbers at the four vertices of any rectangle with sides parallel to the diagonals of the array (in the case of a "degenerate" rectangle, i.e. a diagonal, we refer to the sum of the two numbers in its corner squares) are one and the same number.
Is this possible? Consider the cases
(a) $N = 3$ (b) $N = 4$ (c) $N = 5$ (VG Boltyanskiy, Moscow)
