---
tag: 5AB9T8JQ2G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1977 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1869896
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55276
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1977
    source: hf-ai-mo-aops
    label: 1977 All Soviet Union Mathematical Olympiad
---
Given a set of $n$ positive numbers. For each its nonempty subset consider the sum of all the subset's numbers. Prove that you can divide those sums onto $n$ groups in such a way, that the least sum in every group is not less than a half of the greatest sum in the same group.
