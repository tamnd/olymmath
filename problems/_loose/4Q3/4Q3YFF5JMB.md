---
tag: 4Q3YFF5JMB
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first person writes down the numbers from 1 to 100 in some order to form a sequence. The second person then writes down 50 different numbers from this sequence and asks the first person to write these 50 numbers in the order they appear in the original sequence; the second person then writes down another 50 different numbers from the original sequence and asks the first person to write these 50 numbers in the order they appear in the original sequence. This process continues. How many times at least must this process be repeated for the second person to be able to determine the original sequence written by the first person? Prove your conclusion.
