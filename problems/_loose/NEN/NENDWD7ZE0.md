---
tag: NENDWD7ZE0
kind: problem
type: answer
answer: \text{Beto will always achieve his goal}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a board with three rows and $2019$ columns. In the first row are written the numbers integers from $1$ to $2019$ inclusive, ordered from smallest to largest. In the second row, $Ana$ writes those same numbers but ordered at your choice. In each box in the third row write the difference between the two numbers already written in the same column (the largest minus the smallest). $Beto$ have to paint some numbers in the third row so that the sum of the numbers painted is equal to the sum of the numbers in that row that were left unpainted. Can $Ana$ complete the second row so that $Beto$ does not achieve his goal?
