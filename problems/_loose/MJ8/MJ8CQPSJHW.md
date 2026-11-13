---
tag: MJ8CQPSJHW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence defined by the following recursion, let's call it power-factorial and denote it as: $n$ !

$$
a_{1}=1, a_{n}=n^{a_{n-1}}
$$

Determine the last digit of $n$ !, as a function of $n$.
