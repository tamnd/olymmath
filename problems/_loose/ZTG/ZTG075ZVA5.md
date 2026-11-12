---
tag: ZTG075ZVA5
kind: problem
type: answer
answer: ((2^{51}+1)/3)/2^{50}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call the "complexity" of a given number the smallest length of a numerical sequence (if such exists) that starts with zero and ends with this number, where each subsequent member of the sequence is either half of the previous one or, when added to the previous one, equals 1. Among all numbers of the form $m / 2^{50}$, where $m=1,3,5, \ldots, 2^{50}-1$, find the number with the greatest "complexity".
