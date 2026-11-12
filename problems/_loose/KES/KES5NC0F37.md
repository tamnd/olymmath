---
tag: KES5NC0F37
kind: problem
type: answer
answer: "0.75"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The probability of event $A$ occurring in each trial is 1/2. Using Chebyshev's inequality,
estimate the probability that the number $X$ of occurrences of event $A$ is within the range from 40 to 60, if 100 independent trials are conducted.
