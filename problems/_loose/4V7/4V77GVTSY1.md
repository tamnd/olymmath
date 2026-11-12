---
tag: 4V77GVTSY1
kind: problem
type: answer
answer: "2047"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
All natural numbers are divided into "good" and "bad" according to the following rules:

a) From any bad number, you can subtract some natural number not exceeding its half so that the resulting difference becomes "good".

b) From a "good" number, you cannot subtract no more than half of it so that it remains "good".

It is known that the number 1 is "good". Find the nearest "good" number to 2015.
