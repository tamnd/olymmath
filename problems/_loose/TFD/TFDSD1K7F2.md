---
tag: TFDSD1K7F2
kind: problem
type: answer
answer: "1970"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for a natural, four-digit number with the following properties:

1. The sum of the thousands place and the hundreds place is equal to the number that results when the two middle digits are removed from the sought number.
2. This sum is less than double the tens place.
3. Exactly one of the four place values is a prime number.
