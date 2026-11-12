---
tag: MHC069Q3BH
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two sages are playing the following game. The numbers $0,1,2, \ldots, 1024$ are written down. The first sage crosses out 512 numbers (of his choice), the second crosses out 256 of the remaining, then the first crosses out 128 numbers, and so on. On the tenth step, the second sage crosses out one number; two numbers remain. After this, the second sage pays the first the difference between these numbers. What is the best strategy for the first sage? What is the best strategy for the second sage? How much will the second sage pay the first if both play optimally?
