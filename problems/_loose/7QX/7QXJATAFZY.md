---
tag: 7QXJATAFZY
kind: problem
type: answer
answer: "139"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for a three-digit integer in the decimal number system, which has the following properties: if the digits in the tens and units place are swapped, the sought number is obtained when written in octal (base-8); if the digits in the hundreds and tens place are swapped, a number is obtained which, when read in base-6, is 16 less than the sought number; finally, by swapping the digits in the hundreds and units place, a number in base-4 is obtained which is 18 greater than the sought number.
