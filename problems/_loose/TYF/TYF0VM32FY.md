---
tag: TYF0VM32FY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play the following game on a circular board with 2009 houses. The two plays put, alternatively, on an empty house, one of three pieces, called *explorer (E)*, *trap (T)* or *stone (S)*. A treasure is a sequence of three consecutive filled houses such that the first one (on any direction) has an explorer and the middle one doesn't have a trap. For example, *STE* is not a treasure, while *TEE* is a treasure. The first player forming a treasure wins. Can any of the players guarantee the victory? And, in affirmative case, who?
