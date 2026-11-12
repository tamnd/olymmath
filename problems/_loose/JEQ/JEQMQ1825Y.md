---
tag: JEQMQ1825Y
kind: problem
type: answer
answer: 1,12,23,34,45,56,67,78,89
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people play such a game: the first one calls out any integer from 1 to 10 inclusive, the second one mentally adds another number from the first ten to this number and calls out the sum. To this sum, the first one adds again some number from the first ten and calls out the sum, and so on. The one who calls out the number 100 wins. How should one play to win? Who wins with the correct play: the one who starts, or the partner?
