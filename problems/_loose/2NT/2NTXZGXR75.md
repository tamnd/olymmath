---
tag: 2NTXZGXR75
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given positive integer $n$ one has to choose positive integers $a_0, a_1,...$ so that the following conditions hold:
(1) $a_i = a_{i+n}$ for any $i$,
(2) $a_i$ is not divisible by $n$ for any $i$,
(3) $a_{i+a_i}$ is divisible by $a_i$ for any $i$.
For which positive integers $n > 1$ is this possible only if the numbers $a_0, a_1, ...$ are all equal?
