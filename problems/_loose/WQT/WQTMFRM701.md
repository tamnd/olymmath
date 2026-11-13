---
tag: WQTMFRM701
kind: problem
type: answer
answer: 2^{k}>n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Daniel and Merlijn are playing a game. Daniel has $k$ sheets of paper lying next to each other on the table, where $k$ is a positive integer. He writes a number of the numbers from 1 to $n$ on each sheet (it is allowed to write no number or all numbers). On the back of each sheet, he writes exactly the remaining numbers from 1 to $n$. When Daniel is done, Merlijn may turn over some of the sheets of paper (he may also choose not to turn over any or all of the sheets). If he manages to make all the numbers from 1 to $n$ visible at the same time (where duplicates are allowed), he wins.

Determine the smallest $k$ for which Merlijn can always win, regardless of what Daniel does.
