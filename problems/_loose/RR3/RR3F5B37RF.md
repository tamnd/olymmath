---
tag: RR3F5B37RF
kind: problem
type: answer
answer: "83"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting with a four-digit integer that is not a multiple of 1000 , an integer with fewer digits can be obtained by removing the leading digit and ignoring leading zeros. For example, removing the leading digit from 1023 gives the integer 23, and removing the leading digit from 2165 gives 165. How many integers from 1001 to 4999, inclusive, other than multiples of 1000, have the property that the integer obtained by removing the leading digit is a factor of the original integer?
