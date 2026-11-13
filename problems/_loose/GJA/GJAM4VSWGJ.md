---
tag: GJAM4VSWGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1699344
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Iran MO (3rd Round)
---
Find the smallest positive integer $n$ such that we can write numbers $1,2,\dots ,n$ in a 18*18 board such that:
i)each number appears at least once
ii)In each row or column,there are no two numbers having difference 0 or 1
