---
tag: 43FJG4Z9JK
kind: problem
type: answer
answer: n=100(+1)fork=2mn=100(+1)+1fork=2m+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
[8] At night, 100 tourists arrived at a hotel. They know that the hotel has single rooms 1, 2, ..., n, of which k are under repair (but it is unknown which ones), and the rest are free. The tourists can agree in advance on their actions, after which they go to check in one by one: each checks the rooms in any order, finds the first free room not under repair, and stays there for the night. However, the tourists do not want to disturb each other: it is not allowed to check a room where someone has already checked in. For each k, indicate the smallest n for which the tourists can guarantee they will be able to check in without disturbing each other.

Fedor Ivlev
