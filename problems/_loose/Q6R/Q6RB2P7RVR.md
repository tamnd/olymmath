---
tag: Q6RB2P7RVR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$. Vera performs the following operation on $n$: add 3, then add 3 again, until she gets a number divisible by 5 (if the initial number is divisible by 5, no addition is needed), and then she divides the result by 5. She then performs the same operation on the quotient, and continues this process. For which $n$ is it impossible to obtain 1 through such operations?
