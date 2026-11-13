---
tag: XVR8GH8XVV
kind: problem
type: answer
answer: "13501"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The cross sum of a natural number is understood to be the sum of its digits: for example, 1967 has the cross sum $1+9+6+7=23$.

Determine the sum of all cross sums of the natural numbers from 1 to 1000 inclusive!
