---
tag: WQTBZ1MBW3
kind: problem
appearances:
  - at: pumac/2021/na2
    primary: true
  - at: pumac/2021/nb4
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834923
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *substring* of a number $n$ is a number formed by removing some digits from the beginning and end of $n$ (possibly a different number of digits is removed from each side). Find the sum of all prime numbers $p$ that have the property that any substring of $p$ is also prime.
