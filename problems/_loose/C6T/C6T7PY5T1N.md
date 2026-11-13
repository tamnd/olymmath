---
tag: C6T7PY5T1N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h21844
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2004 Tournament Of Towns
---
How many different ways are there to write 2004 as a sum of one or more positive integers which are all "aproximately equal" to each other? Two numbers are called aproximately equal if their difference is at most 1. The order of terms does not matter: two ways which only differ in the order of terms are not considered different.
