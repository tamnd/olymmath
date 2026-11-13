---
tag: GZ5ZEHSX98
kind: problem
type: answer
answer: Red-2,orange-4,yellow-8,green-9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three people $A, B, C$ counted a pile of balls of four colors (see table).

| | red | orange | yellow | green |
| :--- | :---: | :---: | :---: | :---: |
| A | 2 | 5 | 7 | 9 |
| B | 2 | 4 | 9 | 8 |
| C | 4 | 2 | 8 | 9 |

Each of them correctly distinguished two colors, but could confuse the other two: one confused red and orange, another - orange and yellow, and the third - yellow and green. The results of their counts are given in the table. How many balls of each color were there actually?
