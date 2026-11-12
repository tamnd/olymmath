---
tag: GYZ7XPS16A
kind: problem
type: answer
answer: "20000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A stack consists of 300 cards: 100 white, 100 black, and 100 red. For each white card, the number of black cards lying below it is counted; for each black card, the number of red cards lying below it is counted; and for each red card, the number of white cards lying below it is counted. Find the maximum possible value of the sum of the three hundred resulting numbers.
