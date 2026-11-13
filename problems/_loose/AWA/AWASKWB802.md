---
tag: AWASKWB802
kind: problem
type: answer
answer: a_{n}=(n!)\sum_{k=2}^{n}\frac{(-1)^{k}}{k!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n(n \geqslant 2)$ people each writing a greeting card. First, the cards are collected, and then each person takes one card given by someone else. How many different ways can these $n$ people take the cards?
