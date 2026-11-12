---
tag: 4RKQ8VHDSM
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the integers from one to a billion inclusive is replaced by the sum of the digits of the number; single-digit numbers, of course, do not change, while the others decrease. Then each of the newly obtained numbers is again replaced by the sum of its digits, and so on until a billion single-digit numbers are obtained. Which numbers will be more among the resulting numbers - ones or twos?
