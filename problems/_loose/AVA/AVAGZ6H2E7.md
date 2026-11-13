---
tag: AVAGZ6H2E7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 USA Team Selection Test
    url: https://artofproblemsolving.com/community/c6h546343
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10556
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148067
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: us-tst/2013
    source: hf-ai-mo-aops
    label: 2013 USA Team Selection Test
  - at: us-tst
    source: hf-mathnet
    label: United States IMO Team Selection Test
---
A social club has $2k+1$ members, each of whom is fluent in the same $k$ languages. Any pair of members always talk to each other in only one language. Suppose that there were no three members such that they use only one language among them. Let $A$ be the number of three-member subsets such that the three distinct pairs among them use different languages. Find the maximum possible value of $A$ .
