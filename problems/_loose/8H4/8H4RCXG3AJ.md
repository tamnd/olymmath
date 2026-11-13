---
tag: 8H4RCXG3AJ
kind: problem
type: answer
answer: (2,2),(2,4),(4,2),(4,4),(3,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When a lamp in a $5 \times 5$ grid is turned on (or off), its neighbors located in the same row or column also change their state. Initially, all lamps are off. A monkey arrives and plays with the switches. In the end, only one lamp is on. Determine its (their) possible position(s).
