---
tag: 4PH63GSSB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number $B$ is obtained from the number $A$ according to the following rule: all digits of the number $A$ are changed simultaneously. If a digit is greater than 2, then 2 can be subtracted from it, and if a digit is less than 8, then 2 can be added to it (for example, the digit 4 can be replaced with 2 or 6, while the digit 9 can only be replaced with 7). Can the sum of the numbers $A$ and $B$ equal 2345678?
