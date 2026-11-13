---
tag: F51CDH49XR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer between $0$ and $5^5$. Arrange $n$ black stones and $5^5-n$ white stones in a row, and repeat the following operation $5$ times:
group the stones in sets of $5$ from left to right, and replace the $5$ stones in each group with one stone of the color that appears more frequently among them.
Find the minimum possible value of $n$ such that the last remaining stone is always black, regardless of the initial arrangement.
