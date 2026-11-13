---
tag: 2EPDSB3CH1
kind: problem
type: answer
answer: 2^{400}[\frac{1}{5}(2^{1600}-1)+1]-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Give 2000 people sequential numbers as $1,2, \cdots, 2000$, if the sum of the numbers of some people (can be 1 person, but not none) is a multiple of 5, then it is called a "good group". Find the number of all possible "good groups" that can be formed from these 2000 people.
