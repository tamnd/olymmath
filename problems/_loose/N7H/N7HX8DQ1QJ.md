---
tag: N7HX8DQ1QJ
kind: problem
type: answer
answer: "1960"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for the smallest natural four-digit number $x$ (whose first digit is not zero) with the following property:

If in $x+1$ the two middle digits are swapped and the last (fourth) digit is subsequently removed, a three-digit number $y$ is formed such that $x$ is divisible by $11 y$ without a remainder.
