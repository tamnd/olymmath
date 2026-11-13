---
tag: PPR6HSPDK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1611843
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21977
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2017
    source: hf-ai-mo-aops
    label: 2017 Caucasus Mathematical Olympiad
---
Find the least positive integer $n$ satisfying the following statement: for eash pair of positive integers $a$ and $b$ such that $36$ divides $a+b$ and $n$ divides $ab$ it follows that $36$ divides both $a$ and $b$ .
