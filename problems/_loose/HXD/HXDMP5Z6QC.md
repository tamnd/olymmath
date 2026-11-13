---
tag: HXDMP5Z6QC
kind: problem
type: answer
answer: \sum_{i=0}^{\lfloor \frac{n}{4} \rfloor} (\lfloor \frac{n-4c}{2} \rfloor + 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all nonnegative integer $i$, there are seven cards with $2^i$ written on it.
How many ways are there to select the cards so that the numbers add up to $n$?
