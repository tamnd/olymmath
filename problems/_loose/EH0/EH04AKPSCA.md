---
tag: EH04AKPSCA
kind: problem
type: answer
answer: "1128"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
50 balls numbered from 1 to 50 are arranged in a row. Now they are colored according to the following method: (1) color 2 balls; (2) the difference in the numbers of the 2 colored balls is greater than 2. If the two colored balls in one coloring method are different from the two colored balls in another coloring method by at least one number, these two coloring methods are called "different". How many different coloring methods are there?
