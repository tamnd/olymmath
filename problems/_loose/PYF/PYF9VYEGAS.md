---
tag: PYF9VYEGAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Bosnia And Herzegovina - Regional Olympiad
    url: https://artofproblemsolving.com/community/c6h1711572
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31877
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ba-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Bosnia And Herzegovina - Regional Olympiad
---
Find all elements $n \in A = \{2,3,...,2016\} \subset \mathbb{N}$ such that:
every number $m \in A$ smaller than $n$ , and coprime with $n$ , must be a prime number
