---
tag: 2GJ22FEQAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To determine whether a positive integer can be divided by 7, the "cut-tail method" can be used. For example, for 2527, cutting off the last digit 7 yields 252, then subtracting twice the cut-off last digit 7 from 252 gives 238. This is called one "cut-tail." Performing another "cut-tail" on 238 yields 7, which is clearly a multiple of 7, thus 2527 can be divided by 7.

Try to prove that a positive integer can be divided by 7 if and only if the number obtained after a finite number of "cut-tail" operations can be divided by 7.
