---
tag: BJYH3M384T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call the successor of a natural number $x$ the number we get from it according to the following instructions:

a) if the last digit of $x$ (in its decimal representation) is 0, we omit it,

b) if the last digit of $x$ is 4, we omit it,

c) if the last digit of $x$ is neither 0 nor 4, we multiply $x$ by 2.

Let's call the descendants of a number $x$ the successor of $x$ and the successor of every further descendant (i.e., the successor of the successor, the successor of the successor of the successor, etc.). Prove that the number 4 is a descendant of every natural number.
