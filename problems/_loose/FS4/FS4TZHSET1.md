---
tag: FS4TZHSET1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h463461
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73846
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2000
    source: hf-ai-mo-aops
    label: 2000 Stanford Mathematics Tournament
---
You use a lock with four dials, each of which is set to a number between 0 and 9 (inclusive). You can never remember your code, so normally you just leave the lock with each dial one higher than the correct value. Unfortunately, last night someone changed all the values to 5. All you remember about your code is that none of the digits are prime, 0, or 1, and that the average value of the digits is 5.

How many combinations will you have to try?
