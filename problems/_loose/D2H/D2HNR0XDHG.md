---
tag: D2HNR0XDHG
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill a 5x5 table with 5 ones, 5 twos, 5 threes, 5 fours, and 5 fives (one number per cell), such that the absolute difference between any two numbers in the same column does not exceed 2. Consider the sum of the numbers in each column, and let the minimum of these 5 sums be $ M $. Then the maximum value of $ M $ is $ $
