---
tag: F7Y1KQ0N0A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h2121107
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248159
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
For every integer $n \ge 2$ let $B_n$ denote the set of all binary $n$ -nuples of zeroes and ones, and split $B_n$ into equivalence classes by letting two $n$ -nuples be equivalent if one is obtained from the another by a cyclic permutation.(for example 110, 011 and 101 are equivalent). Determine the integers $n \ge 2$ for which $B_n$ splits into an odd number of equivalence classes.
