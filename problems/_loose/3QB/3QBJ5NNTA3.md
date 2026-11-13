---
tag: 3QBJ5NNTA3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0, a_1,...$ be a sequence of non-negative integers and $b_0, b_1,... $ be a sequence of non-negative integers defined by the following rule:
$b_i=gcd(a_i, a_{i+1})$ for every $i=>0$
Is it possible every positive integer to occur exactly once in the sequence $b_0, b_1,... $
