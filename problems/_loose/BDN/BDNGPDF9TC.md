---
tag: BDNGPDF9TC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are several contestants at a math olympiad. We say that two contestants $ A$ and $ B$ are *indirect friends* if there are contestants $ C_1, C_2, ..., C_n$ such that $ A$ and $ C_1$ are friends, $ C_1$ and $ C_2$ are friends, $ C_2$ and $ C_3$ are friends, ..., $ C_n$ and $ B$ are friends. In particular, if $ A$ and $ B$ are friends themselves, they are *indirect friends* as well.
Some of the contestants were friends before the olympiad. During the olympiad, some contestants make new friends, so that after the olympiad every contestant has at least one friend among the other contestants. We say that a contestant is *special* if, after the olympiad, he has exactly twice as indirect friends as he had before the olympiad.
Prove that the number of special contestants is less or equal than $ \frac{2}{3}$ of the total number of contestants.
