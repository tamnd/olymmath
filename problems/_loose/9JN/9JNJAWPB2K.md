---
tag: 9JNJAWPB2K
kind: problem
type: answer
answer: "60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many sequences of words (not necessarily grammatically correct) have the property that the first word has one letter, each word can be obtained by inserting a letter somewhere in the previous word, and the final word is CCAMT? Here are examples of possible sequences:

C,CA,CAM,CCAM,CCAMT.

A,AT,CAT,CAMT,CCAMT.

*2021 CCA Math Bonanza Team Round #1*
