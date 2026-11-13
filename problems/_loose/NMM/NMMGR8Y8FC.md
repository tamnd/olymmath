---
tag: NMMGR8Y8FC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The New York Public Library requires patrons to choose a 4-digit Personal Identification Number (PIN) to access its online system. (Leading zeros are allowed.) The PIN is not allowed to contain either of the following two forbidden patterns:
* A digit that is repeated 3 or more times in a row. For example, 0001 and 5555 are not PINs, but 0010 is a PIN.
* A pair of digits that is duplicated. For example, 1212 and 6363 are not PINs, but 1221 and 6633 are PINs.
How many distinct possible PINs are there?
