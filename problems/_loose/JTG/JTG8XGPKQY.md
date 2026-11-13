---
tag: JTG8XGPKQY
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Arrange the natural numbers from 1 to 1982 in a certain order in a row. The computer reads the numbers from left to right, comparing each pair of adjacent numbers (the 1st and 2nd, the 2nd and 3rd, etc.). If the larger number is on the left, the computer swaps their positions and continues reading until the end. Then, the computer reads the numbers from right to left, applying the same rule to swap the positions of the numbers. After completing both readings, it is found that the number in the 100th position did not change its position in either reading. Find this number.
