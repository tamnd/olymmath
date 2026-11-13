---
tag: HF1JMHBMB0
kind: problem
type: answer
answer: "29"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are given $2001$ balloons and a positive integer $k$. Each balloon has been blown up to a certain size (not necessarily the same for each balloon). In each step it is allowed to choose at most $k$ balloons and equalize their sizes to their arithmetic mean. Determine the smallest value of $k$ such that, whatever the initial sizes are, it is possible to make all the balloons have equal size after a finite number of steps.
