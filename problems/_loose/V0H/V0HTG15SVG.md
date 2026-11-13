---
tag: V0HTG15SVG
kind: problem
type: answer
answer: \{1, 3, 9, 27, 81\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$ , define $a_n = 20 + n^2$ and $d_n = gcd(a_n, a_{n+1})$. Find the set of all values that are taken by $d_n$ and show by examples that each of these values is attained.
