---
tag: FT5CNCE0C7
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118752
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a number black hole game: arbitrarily select four different digits, form the largest and smallest four-digit numbers, and subtract the smaller number from the larger one. Repeat the process with the four digits of the resulting four-digit number. After a few steps of operation, you will inevitably get 6174. Try it yourself, choose the digits $2,0,1,9$, and see how many steps it takes to get 6174.

1. Form the largest number: 9210
2. Form the smallest number: 0129
3. Subtract: 9210 - 0129 = 9081

Next step:
1. Form the largest number: 9810
2. Form the smallest number: 0189
3. Subtract: 9810 - 0189 = 9621

Next step:
1. Form the largest number: 9621
2. Form the smallest number: 1269
3. Subtract: 9621 - 1269 = 8352

Next step:
1. Form the largest number: 8532
2. Form the smallest number: 2358
3. Subtract: 8532 - 2358 = 6174

So, it takes 4 steps to get 6174.
