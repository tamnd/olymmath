---
tag: A208MH5YGZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On each field of a board of size $n \times n$, there is one light bulb. At the beginning, some bulbs are on, and some are off. In each step, we choose a $2 \times 2$ or $3 \times 3$ square and change the state of all bulbs in that square (turning on the bulbs that are off, and turning off the bulbs that are on).

Prove that for every natural number $n$, there exists an arrangement of bulbs that cannot be turned off with a finite sequence of such steps.
