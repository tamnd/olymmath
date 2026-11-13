---
tag: Y0XMTZB1K2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 India PRMO
    url: https://artofproblemsolving.com/community/c6h1891363
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16628
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2018
    source: hf-ai-mo-aops
    label: 2018 India PRMO
---
A positive integer $k$ is said to be *good* if there exists a partition of $ \{1, 2, 3,..., 20\}$ into disjoint proper subsets such that the sum of the numbers in each subset of the partition is $k$ . How many *good* numbers are there?
