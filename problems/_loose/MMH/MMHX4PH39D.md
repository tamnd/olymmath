---
tag: MMHX4PH39D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 2017 points distributed on a circle, each point is labeled with +1 or -1. If starting from a certain point and moving in any direction around the circle to any other point, the sum of all the numbers passed is positive, then that point is called "good." Prove: If the number of points labeled -1 is no more than 672, then there is at least one good point on the circle.
