---
tag: ZW2HC11GF7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially the numbers 1 through 2005 are marked. A finite set of marked consecutive integers is called a block if it is not contained in any larger set of marked consecutive integers. In each step we select a set of marked integers which does not contain the first or last element of any block, unmark the selected integers, and mark the same number of consecutive integers starting with the integer two greater than the largest marked integer. What is the minimum number of steps necessary to obtain 2005 single integer blocks?
