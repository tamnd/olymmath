---
tag: AB94BGR9RT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have two boxes with balls. In one box there are $m$ balls, in the other box $n$ balls, where $m, n>0$. Two different actions are allowed:

(i) Remove an equal number of balls from both boxes.

(ii) Increase the number of balls in one of the boxes by a factor of $k$.

Is it always possible to remove all the balls from both boxes with these two actions,

a) if $k=2$?

b) if $k=3$?
