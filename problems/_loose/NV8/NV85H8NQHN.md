---
tag: NV85H8NQHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A circle is divided into $n$ sectors, and some of the sectors contain chips - there are a total of $n+1$ chips. Then the position is subjected to transformations. One step of the transformation consists of the following: any two chips that are in the same sector are taken and moved in opposite directions to the adjacent sectors. Prove that after some number of steps, at least half of the sectors will be occupied.
