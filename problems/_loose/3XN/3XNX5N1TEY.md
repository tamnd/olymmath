---
tag: 3XNX5N1TEY
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Someone wants to select as many different natural numbers from 1 to 1000 as possible according to the following rules:

The first number is to be chosen randomly from the numbers 1 to 6 by rolling a die and selecting the number shown on the die. The subsequent numbers are to be chosen such that the following applies:

When the selection of numbers is complete, any two of the overall selected numbers always have a sum that is divisible by 3.

Determine (depending on all possibilities of the first number) the maximum number of numbers that can be selected according to these rules!
