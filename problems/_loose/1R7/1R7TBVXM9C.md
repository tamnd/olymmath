---
tag: 1R7TBVXM9C
kind: problem
type: answer
answer: 2^{1990} - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $b_m$ be numbers of factors $2$ of the number $m!$ (that is, $2^{b_m}|m!$ and $2^{b_m+1}\nmid m!$). Find the least $m$ such that $m-b_m = 1990$.
