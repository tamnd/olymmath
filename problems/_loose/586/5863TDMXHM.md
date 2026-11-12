---
tag: 5863TDMXHM
kind: problem
type: answer
answer: c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $ c \geq 1 $. To each subset $ A $ of the set $ \{1,2, \ldots ,n\} $, we assign a number $ w(A) $ from the set $ \{1,2, \ldots ,c\} $ such that the following condition is satisfied:

Let $ a(n) $ be the number of such assignments. Calculate $ \lim_{n\to \infty}\sqrt[n]{a(n)} $.
Note: $ \min(x,y) $ is the smaller of the numbers $ x $, $ y $.
