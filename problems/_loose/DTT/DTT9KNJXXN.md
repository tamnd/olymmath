---
tag: DTT9KNJXXN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there is an $m \times n$ rectangular grid table where each cell contains a natural number. Each operation can add an integer to a pair of adjacent cells, ensuring that the resulting numbers are non-negative integers. Find the necessary and sufficient condition for it to be possible to make all numbers in the table 0 after several operations.

The necessary and sufficient condition for it to be possible to make all numbers in the table 0 after several operations is that the sum of all numbers in the table must be even.

This is because each operation changes the sum of the numbers in the table by an even number (since the same integer is added to two adjacent cells). Therefore, if the initial sum of the numbers is odd, it is impossible to make all numbers 0, as the sum would never become 0 (an even number). Conversely, if the initial sum is even, it is possible to make all numbers 0 through a series of operations.
