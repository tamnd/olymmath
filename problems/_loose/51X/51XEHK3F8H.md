---
tag: 51XEHK3F8H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call the positive integer $x$ interesting, if there exists integer $y$ such that the following equation holds: $(x + y)^y = (x - y)^x.$ Suppose we list all interesting integers in increasing order. An interesting integer is considered very interesting if it is not relatively prime with any other interesting integer preceding it. Find the second very interesting integer.

*Note: It is assumed that the first interesting integer is not very interesting.*

*Proposed by Zurab Aghdgomelashvili, Georgia*
