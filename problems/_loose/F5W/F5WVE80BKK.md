---
tag: F5WVE80BKK
kind: problem
type: answer
answer: "5.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232674
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a real number. It is known that however we choose several numbers from the interval $(0, 1]$ with sum equal to $S$, these numbers can be separated into two subsets with the following property: The sum of the numbers in one of the subsets doesn't exceed 1 and the sum of the numbers in the other subset doesn't exceed 5.

Find the greatest possible value of $S$.
