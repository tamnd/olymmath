---
tag: Q3FF1JNTPV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207071
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We color one of the numbers $1,...,8$ with white or black according to the following rules:
i) number $4$ gets colored white and one at lest of the following numbers gets colored black
ii) if two numbers $a,b$ are colored in a different color and $a+b\le 8$, then number $a+b$ gets colored black.
iii) if two numbers $a,b$ are colored in a different color and $a\cdot b\le 8$, then number $a\cdot b$ gets colored black.
If by those rules, all numbers get colored, find the color of each number.
