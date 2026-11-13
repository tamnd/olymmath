---
tag: ABAY2WGJJQ
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number that satisfies the following two conditions is called a "lucky number": (1) Starting from the third digit from left to right, each digit is the difference between the two preceding digits (the larger number minus the smaller number); (2) No repeated digits. For example: 132, 871, 54132 are all "lucky numbers"; but 8918 (the digit "8" is repeated), 990 (the digit "9" is repeated) are not "lucky numbers". What is the second digit from left to right of the largest "lucky number"? $ $
