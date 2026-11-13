---
tag: C2EQZEBCVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h56495
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66280
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Let $n$ be the smallest nonprime integer greater than 1 with no prime factor less than 10. Then

A. $100 < n \leq 110$
B. $110 < n \leq 120$
C. $120 < n \leq 130$
D. $130 < n \leq 140$
E. $140 < n \leq 150$
