---
tag: 1XA1QYERWJ
kind: problem
type: answer
answer: 1221_{b}=1596_{b-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's explain the following facts. The sequence of digits "1221" is first considered as a number in the base-13, then in the base-12, followed by the base-11, and finally in the base-10 number system. In each case, we convert our number to the number system with the base one less. In the first three cases, the result of the conversion is the same sequence of digits (the same digits in the same order). Why can the final conversion not result in the same sequence as the first three cases? - Also provide another such sequence of digits.
