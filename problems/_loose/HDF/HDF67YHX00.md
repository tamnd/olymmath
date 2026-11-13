---
tag: HDF67YHX00
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022972
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28975
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
We attempt to cover the plane with an infinite sequence of rectangles, overlapping allowed.
(a) Is the task always possible if the area of the $n$ th rectangle is $n^2$ for each $n$ ?
(b) Is the task always possible if each rectangle is a square, and for any number $N$ , there exist squares with total area greater than $N$ ?
