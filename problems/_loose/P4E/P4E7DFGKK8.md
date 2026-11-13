---
tag: P4E7DFGKK8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h2121090
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54653
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Romania Team Selection Tests
---
Given a square-free integer $n>2$ , evaluate the sum $\sum_{k=1}^{(n-2)(n-1)} \lfloor ({kn})^{1/3} \rfloor$ .
