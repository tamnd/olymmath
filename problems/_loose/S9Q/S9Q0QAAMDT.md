---
tag: S9Q0QAAMDT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h590969
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73863
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2001
    source: hf-ai-mo-aops
    label: 2001 Stanford Mathematics Tournament
---
A binary string is a string consisting of only 0's and 1's (for instance, 001010, 101, etc.). What is the probability that a randomly chosen binary string of length 10 has 2 consecutive 0's? Express your answer as a fraction.
