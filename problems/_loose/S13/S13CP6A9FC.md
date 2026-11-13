---
tag: S13CP6A9FC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From a six-digit natural number $n$, another number is to be calculated by performing an addition, subtraction, multiplication, or division with a natural number of at most three digits, where only multiplication by 0 and division by 0 are not allowed. The result should then be subjected to one of the aforementioned operations, and the new result as well, etc. The formation of further numbers should only be discontinued when a result of 0 is achieved.

a) Are there six-digit numbers $n$ from which the result 0 can be reached with only two such operations?

b) Prove that from every six-digit number $n$ that is not greater than 999000, the result 0 can be reached with at most three such operations!
