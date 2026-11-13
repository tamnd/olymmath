---
tag: 3PAH4KJPWG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077902
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78509
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Determine the number of sequences of positive integers $1 = x_0 < x_1 < \dots < x_{10} = 10^{5}$ with the property that for each $m=0,\dots,9$ the number $\tfrac{x_{m+1}}{x_m}$ is a prime number.

*Proposed by Evan Chen*
