---
tag: A1RHSSPY1G
kind: problem
type: answer
answer: "9897969594939291909"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest positive integer $n$ such that no two adjacent digits are the same, and for any two distinct digits $0 \leq a,b \leq 9 $, you can't get the string $abab$ just by removing digits from $n$.
