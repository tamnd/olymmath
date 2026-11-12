---
tag: WN4ZWEWG99
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, there were 10 piles of candies on the table, containing $1, 2, \ldots, 10$ candies respectively. The Child decided to redistribute the candies. On each odd minute, he chooses one pile and divides it into two piles, each containing at least one candy. On each even minute, he chooses two piles and merges them into one (thus, his first action is to divide a pile into two). Can it happen at some point that all piles on the table contain the same number of candies?

(N. Agakhanov, jury)
