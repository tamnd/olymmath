---
tag: N0BT0JNN2F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h590428
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9235
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2013
    source: hf-ai-mo-aops
    label: 2013 Canadian Mathematical Olympiad Qualification Repechage
---
For each positive integer $k$ , let $S(k)$ be the sum of its digits. For example, $S(21) = 3$ and $S(105) = 6$ . Let $n$ be the smallest integer for which $S(n) - S(5n) = 2013$ . Determine the number of digits in $n$ .
