---
tag: BMHDEXZ17Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h478172
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4068
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Romania Team Selection Test
---
Consider a matrix whose entries are integers. Adding a same integer to all entries on a same row, or on a same column, is called an operation. It is given that, for infinitely many positive integers $n$ , one can obtain, through a finite number of operations, a matrix having all entries divisible by $n$ . Prove that, through a finite number of operations, one can obtain the null matrix.
