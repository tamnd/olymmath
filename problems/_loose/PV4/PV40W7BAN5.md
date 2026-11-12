---
tag: PV40W7BAN5
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya has a $3 \times$ 3 table. He places chips in its cells according to the following rules:

- no more than one chip can be placed in each cell;
- a chip can be placed in an empty cell if the corresponding row and column already contain an even number of chips (0 is considered an even number).

What is the maximum number of chips Petya can place?
