---
tag: 47KN4WCZJN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Azerbaijan National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3120434
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30748
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Azerbaijan National Mathematical Olympiad
---
Let's call any natural number "very prime" if any number of consecutive digits (in particular, a digit or number itself) is a prime number. For example, $23$ and $37$ are "very prime" numbers, but $237$ and $357$ are not. Find the largest "prime" number (with justification!).
