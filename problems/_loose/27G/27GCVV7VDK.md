---
tag: 27GCVV7VDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2935455
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34449
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Chile National Olympiad
---
Find a positive integer $x$ , with $x> 1$ such that all numbers in the sequence $$ x + 1,x^x + 1,x^{x^x}+1,... $$ are divisible by $2009.$
