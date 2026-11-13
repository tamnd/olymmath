---
tag: RG40MXST5T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h269079
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3327
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2009
    source: hf-ai-mo-aops
    label: 2009 China Team Selection Test
---
Let nonnegative real numbers $ a_{1},a_{2},a_{3},a_{4}$ satisfy $ a_{1} + a_{2} + a_{3} + a_{4} = 1.$ Prove that
$ max\{\sum_{1}^4{\sqrt {a_{i}^2 + a_{i}a_{i - 1} + a_{i - 1}^2 + a_{i - 1}a_{i - 2}}},\sum_{1}^4{\sqrt {a_{i}^2 + a_{i}a_{i + 1} + a_{i + 1}^2 + a_{i + 1}a_{i + 2}}}\}\ge 2.$
Where for all integers $ i, a_{i + 4} = a_{i}$ holds.
