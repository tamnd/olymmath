---
tag: 7N1THWA3YE
kind: problem
type: answer
answer: k = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed positive integer. There are $n \geq 1$ lamps in a row, some of them are on and some are off. In a single move, we choose a positive integer $i$ ($1 \leq i \leq n$) and switch the state of the first $i$ lamps from the left. Determine the smallest number $k$ with the property that we can make all of the lamps be switched on using at most $k$ moves, no matter what the initial configuration was.

*Proposed by Viktor Simjanoski and Nikola Velov*
