---
tag: 7YM9BRMNWX
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n(n>2)$ coins of different weights and $n$ scales. Each time during weighing, one can choose a scale, place one coin on each end, compare their weights, and then remove the coins. It is known that one of the scales is faulty (but it is unknown which one), and it sometimes gives the correct result and sometimes gives the wrong result. Question: What is the minimum number of weighings required to definitely find the heaviest coin?
