---
tag: 9K5FWYKJGH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=155286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A robot sits at zero on a number line. Each second the robot chooses a direction, left or right, and at the $s$ th second the robot moves $2^{s-1}$ units in that direction on the number line.
For which integers $n$ are there infinitely many routes the robot can take to reach $n$ ?
(You may use the fact that every positive integer can be written as a sum of different powers of 2 . For example, $19=2^{0}+2^{1}+2^{4}$ )
