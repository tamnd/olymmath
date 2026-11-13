---
tag: BKATGBYNM2
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 50 points evenly distributed on a circle, numbered $1,2,3, \cdots \cdots, 49,50$. A mechanical frog starts from point 1 and can jump 1 step at a time, reaching points $2,3,4, \cdots \cdots$; or it can jump 2 steps at a time, reaching points $3,5,7, \cdots \cdots$; or it can jump 3 steps at a time, reaching points 4, 7, $10, \cdots \cdots$; … or it can jump 49 steps at a time, reaching points $50,49,48, \cdots \cdots$. In each type of jump, the number of steps taken each time is the same, and it continues jumping indefinitely. How many of the 49 types of jumps can ensure that all points on the circle are reached.
