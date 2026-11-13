---
tag: TG5959EATT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first term is a positive integer, Tang constructs all the even terms, and Xia constructs the subsequent odd terms. Tang's construction method is: subtract any digit of the previous term from the previous term. Xia's construction method is: add any digit of the previous term to the previous term. If they keep adding new terms, prove that there is an integer that will appear at least 100 times in this sequence.
(1999 World Cities Competition Problem)
