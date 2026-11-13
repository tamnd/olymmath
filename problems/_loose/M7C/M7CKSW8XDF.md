---
tag: M7CKSW8XDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h139738
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31137
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/1997
    source: hf-ai-mo-aops
    label: 1997 Belarusian National Olympiad
---
A set $M$ consists of $n$ elements. Find the greatest $k$ for which there is a collection of $k$ subsets of $M$ such that for any subsets $A_{1},...,A_{j}$ from the collection, there is an element belonging to an odd number of them
