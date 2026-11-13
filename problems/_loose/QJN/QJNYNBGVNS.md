---
tag: QJNYNBGVNS
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill a 9-row, 1000-column table (one number per cell) with 9 ones, 9 twos, 9 threes, ..., and 9 thousands, totaling 9000 numbers, such that the absolute difference between any two numbers in the same column does not exceed 3. Let the minimum value of the sum of the numbers in each column (a total of 1000 column sums) be $M$. Find the maximum value of $M$.
