---
tag: B5VTGKEZVE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26640
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's take a pair of natural numbers and divide the larger one by the smaller one with a remainder (if the numbers are equal, then we also divide one by the other). From the obtained quotient and remainder, we form a new pair of numbers and do the same with them. As soon as one of the numbers becomes zero, we stop the calculations. Prove that if we start with numbers not exceeding 1988, then it will not be possible to perform more than six divisions.
