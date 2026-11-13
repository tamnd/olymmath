---
tag: ZWNYQZC0B0
kind: problem
type: answer
answer: \frac{n^2-4}{2} \text{ for even } n \text{ and } \frac{n^2-1}{2} \text{ for odd } n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let n$\ge$2.Each 1x1 square of a nxn board is colored in black or white such that every black square has at least 3 white neighbors(Two squares are neighbors if they have a common side).What is the maximum number of black squares?
