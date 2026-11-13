---
tag: 1ZSCHFNG75
kind: problem
type: answer
answer: "2016"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is an unknown sequence $a_{1}, a_{2}, a_{3}, \ldots$ of integers that satisfies the following property: for every prime number $p$ and every positive integer $k$ it holds that

$$
a_{p k+1}=p a_{k}-3 a_{p}+13
$$

Determine all possible values of $a_{2013}$.
