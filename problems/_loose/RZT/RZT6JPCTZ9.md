---
tag: RZT6JPCTZ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h390703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5941
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
Consider a composition of functions $\sin, \cos, \tan, \cot, \arcsin, \arccos, \arctan, \arccos$ , applied to the number $1$ . Each function may be applied arbitrarily many times and in any order. (ex: $\sin \cos \arcsin \cos \sin\cdots 1$ ). Can one obtain the number $2010$ in this way?
