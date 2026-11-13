---
tag: PAC51G4NPG
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a magical tree with 63 fruits. On the first day, 1 fruit will fall from the tree. Starting from the second day, the number of fruits that fall each day is 1 more than the previous day. However, if the number of fruits on the tree is less than the number that should fall on a certain day, then on that day it will start over by dropping 1 fruit and continue according to the original rule, and so on. So, on the $ $th day, all the fruits on the tree will have fallen.
