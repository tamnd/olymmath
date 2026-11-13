---
tag: ANNDA68P6K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The "anti-Pascal triangle" is an array of numbers arranged in an equilateral triangle, where each number not in the last row is exactly the absolute value of the difference of the two numbers directly below it. For example, Figure 1 is an anti-Pascal triangle with four rows, and it contains each integer from $1 \sim 10$. The question is: Does there exist a 2018-row anti-Pascal triangle that contains each integer from $1+2+\cdots+2018$ exactly once?
