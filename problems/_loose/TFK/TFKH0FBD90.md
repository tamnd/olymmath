---
tag: TFKH0FBD90
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1906208
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27986
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1986 Tournament Of Towns
---
Consider subsets of the set $1 , 2,..., N$ .
For each such subset we can compute the product of the reciprocals of each member.
Find the sum of all such products.
