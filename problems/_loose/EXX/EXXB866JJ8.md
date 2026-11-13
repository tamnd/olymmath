---
tag: EXXB866JJ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h3230519
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29196
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2023 Tournament of Towns
---
Let us call a positive integer *pedestrian* if all its decimal digits are equal to 0 or 1. Suppose that the product of some two pedestrian integers also is pedestrian. Is it necessary in this case that the sum of digits of the product equals the product of the sums of digits of the factors?

*Viktor Kleptsyn, Konstantin Knop*
