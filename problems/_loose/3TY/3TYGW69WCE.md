---
tag: 3TYGW69WCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have two lists of numbers: the first is $1, 6, 11, \ldots, 96$ and the other is $4, 9, 14, \ldots, 99$. At each step, we choose two numbers $a, b$ from one of the lists, remove them, and place $2(a+b)$ in the other list.

1. Show that the process ends with one number in each list.
2. Show that these numbers are different.
