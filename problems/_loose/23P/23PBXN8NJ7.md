---
tag: 23PBXN8NJ7
kind: problem
type: answer
answer: n!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2008
    source: hf-numinamath-1-5
    label: LIX OM - I - Task 7
---
In an $ n $-person association, there are $ 2n-1 $ committees (any non-empty set of association members
forms a committee). A chairperson must be selected in each committee. The following condition must be met: If
committee $ C $ is the union $ C = A\cup B $ of two committees $ A $ and $ B $, then the chairperson of committee $ C $ is also
the chairperson of at least one of the committees $ A $, $ B $. Determine the number of possible selections of chairpersons.
