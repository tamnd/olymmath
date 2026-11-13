---
tag: Q1934AGZYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $a_1, a_2, \ldots, a_{200}$, we consider the value $S = a_1a_2 + a_2a_3 + \ldots + a_{199}a_{200} + a_{200}a_1$. In one operation, you can change the sign of any number (that is, change $a_i$ to $-a_i$), and then calculate the value of $S$ for the new numbers again. What is the smallest number of operations needed to always be able to make $S$ nonnegative?

*Proposed by Oleksii Masalitin*
