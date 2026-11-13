---
tag: 1V9XQT4P9V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42567
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35687
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1993
    source: hf-ai-mo-aops
    label: 1993 China Team Selection Test
---
Let $S = \{(x,y) | x = 1, 2, \ldots, 1993, y = 1, 2, 3, 4\}$ . If $T \subset S$ and there aren't any squares in $T.$ Find the maximum possible value of $|T|.$ The squares in T use points in S as vertices.
