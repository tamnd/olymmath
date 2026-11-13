---
tag: 7FYJFC4VXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of real numbers $a_n$ satisfying the recurrence
$$a_na_{n+2}-a_{n+1}^2-(n+1)a_na_{n+1}=0.$$
Given that $a_1=1$ and $a_2=2018$, compute
$$\frac{a_{2018}\cdot a_{2016}}{a_{2017}^2}.$$
