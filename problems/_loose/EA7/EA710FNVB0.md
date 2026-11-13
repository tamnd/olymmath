---
tag: EA710FNVB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We wrote down the whole numbers starting from 3 in sequence on a piece of paper. Then, step by step, we create a new sequence by shifting the first element of the last obtained sequence back by as many positions as the value of this number. (Thus, the second sequence starts as: $4,5,6,3,7,8 \ldots$) Prove that every natural number greater than 3 is the first element of some sequence.
