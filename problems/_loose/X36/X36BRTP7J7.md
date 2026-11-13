---
tag: X36BRTP7J7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2005087
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2004
    source: hf-ai-mo-aops
    label: 2004 Abels Math Contest (Norwegian MO)
---
If $m$ is a positive integer, prove that $2^m$ cannot be written as a sum of two or more consecutive natural numbers.
