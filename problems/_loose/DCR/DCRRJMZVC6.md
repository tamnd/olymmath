---
tag: DCRRJMZVC6
kind: problem
type: answer
answer: "1007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(5-7,8,9) There are 2014 boxes on the table, some of which contain candies, while the others are empty.

On the first box, it is written: "All boxes are empty."

On the second - "At least 2013 boxes are empty."

On the third - "At least 2012 boxes are empty."

...

On the 2014th - "At least one box is empty."

It is known that the inscriptions on the empty boxes are false, while those on the boxes with candies are true. Determine how many boxes contain candies.
