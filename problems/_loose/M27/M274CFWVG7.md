---
tag: M274CFWVG7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We append digits to the right of the number 2015 in the following way: we add the unit digit, the tens digit, and the hundreds digit, and then append the unit digit of this sum to the right. We then repeat this process for the newly obtained number, and so on, 1000 times. Does the resulting number with 1004 digits contain, in sequence, the digits 1, 5, and 3 (i.e., ...153...)?
