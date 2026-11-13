---
tag: J06W0XGEMY
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ stone piles each consisting of $2018$ stones. The weight of each stone is equal to one of the numbers $1, 2, 3, ...25$ and the total weights of any two piles are different. It is given that if we choose any two piles and remove the heaviest and lightest stones from each of these piles then the pile which has the heavier one becomes the lighter one. Determine the maximal possible value of $n$.
