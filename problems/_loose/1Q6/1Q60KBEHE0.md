---
tag: 1Q60KBEHE0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1949 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1879125
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56650
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1949
    source: hf-ai-mo-aops
    label: 1949 Moscow Mathematical Olympiad
---
There are $12$ points on a circle. Four checkers, one red, one yellow, one green and one blue sit at neighboring points. In one move any checker can be moved four points to the left or right, onto the fifth point, if it is empty. If after several moves the checkers appear again at the four original points, how might their order have changed?
