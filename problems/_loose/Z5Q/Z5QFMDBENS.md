---
tag: Z5QFMDBENS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920814
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2011
    source: hf-ai-mo-aops
    label: 2011 Princeton University Math Competition
---
A function $S(m, n)$ satisfies the initial conditions $S(1, n) = n$ , $S(m, 1) = 1$ , and the recurrence $S(m, n) = S(m - 1, n)S(m, n - 1)$ for $m\geq 2, n\geq 2$ . Find the largest integer $k$ such that $2^k$ divides $S(7, 7)$ .
