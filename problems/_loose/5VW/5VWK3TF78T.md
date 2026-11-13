---
tag: 5VWK3TF78T
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table, there are 1996 tokens. Two players take turns. In the first move, the first player takes as many as they want, but not all. In each subsequent move, each player can only take a number that is a divisor of the number of tokens the opponent took in the previous move. How should the first player play to win?
