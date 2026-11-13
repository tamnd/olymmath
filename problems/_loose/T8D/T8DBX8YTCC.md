---
tag: T8DBX8YTCC
kind: problem
type: answer
answer: k = 4039
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $k$ piles of stones with $2020$ stones in each pile. Amber can choose any two non-empty piles of stones, and Barbara can take one stone from one of the two chosen piles and puts it into the other pile. Amber wins if she can eventually make an empty pile. What is the least $k$ such that Amber can always win?
