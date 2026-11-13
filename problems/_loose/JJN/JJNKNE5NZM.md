---
tag: JJNKNE5NZM
kind: problem
type: answer
answer: "4096"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A table of numbers has 4 columns and 99 rows and is created in the following way: starting from the second row, the quartet of numbers on each row is determined by the numbers in the previous row, specifically as the sum of the first and second numbers, the difference of the first and second numbers, the sum of the third and fourth numbers, and the difference of the third and fourth numbers.

a) What is the sum of the numbers on the 3rd row, if the sum of the numbers on the first row is 0?

b) What is the sum of the numbers on the 25th row, if the sum of the numbers on the first row is 1?

(K. Pazourek)
