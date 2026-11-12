---
tag: ETANQ3R8VZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are a thousand tickets numbered $000, 001, \ldots, 999$ and a hundred boxes numbered $00, 01, \ldots, 99$. A ticket is allowed to be placed in a box if the number of the box can be obtained from the number of the ticket by erasing one of its digits. Prove that:

a) all tickets can be placed in 50 boxes;

b) it is impossible to place all tickets in fewer than 40 boxes;

c)* it is impossible to place all tickets in fewer than 50 boxes;

d)* Suppose the tickets have four-digit numbers (from 0000 to 0001) and a ticket is allowed to be placed in a box if the number of the box can be obtained from the number of the ticket by erasing any two digits. Prove that all four-digit tickets can be placed in 34 boxes.

e)* What is the minimum set of boxes required for $k$-digit tickets ($k=4,5,6, \ldots$)?
