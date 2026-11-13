---
tag: 8ZXC89PM9Y
kind: problem
type: answer
answer: "945"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is known that among 10 suitcases and 10 keys, each key fits exactly one suitcase, and for each suitcase, exactly one key fits. However, it is not known which key fits which suitcase.

Someone determines this by trial and error, where each trial consists of checking whether a specific key fits a specific suitcase or not. The order of the trials is chosen such that for each suitcase, once a trial has been conducted on it, exactly as many trials are performed until the correct key is found.

What is

a) the smallest

b) the largest

number of trials, after which it can happen that the correct key for each suitcase can be determined?
