---
tag: XS0P0E8VT8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h293448
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55794
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
A finite set of points $X$ and an equilateral triangle $T$ are given on a plane. Suppose that every subset $X'$ of $X$ with no more than $9$ elements can be covered by two images of $T$ under translations. Prove that the whole set $X$ can be covered by two images of $T$ under translations.
