---
tag: 39ZFPSXBNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h3101709
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22594
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2023
    source: hf-ai-mo-aops
    label: 2023 Czech-Polish-Slovak Match
---
Given an integer $n\geq 3$ , determine the smallest positive number $k$ such that any two points in any $n$ -gon (or at its boundary) in the plane can be connected by a polygonal path consisting of $k$ line segments contained in the $n$ -gon (including its boundary).
