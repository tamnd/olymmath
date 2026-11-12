---
tag: 26Q4EPEERP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3456455
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2024
    source: hf-ai-mo-aops
    label: 2024 Rioplatense Mathematical Olympiad
---
Given a set $S$ of integers, an allowed operation consists of the following three steps:
$\bullet$ Choose a positive integer $n$ .
$\bullet$ Choose $n+1$ elements $a_0, a_1, \dots, a_n \in S$ , not necessarily distinct.
$\bullet$ Add to the set $S$ all the integer roots of the polynomial $a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0$ .
Beto must choose an initial set $S$ and perform several allowed operations, so that at the end of the process $S$ contains among its elements the integers $1, 2, 3, \dots, 2023, 2024$ .
Determine the smallest $k$ for which there exists an initial set $S$ with $k$ elements that allows Beto to achieve his objective.
