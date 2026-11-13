---
tag: CSQ0B7EYXE
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We need to write a positive integer in each cell of an infinitely large square grid paper under the following conditions. The number $n$ should appear exactly $n$ times (that is, one 1, two 2s, etc., should appear on the paper), and the difference between any two numbers in adjacent cells should be less than a given $k$. What is the smallest integer $k$ for which the filling can be completed?
