---
tag: ABE8329RZC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h486047
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73961
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
The polynomial $-400x^5+2660x^4-3602x^3+1510x^2+18x-90$ has five rational roots. Suppose you guess a rational number which could possibly be a root (according to the rational root theorem). What is the probability that it actually is a root?
