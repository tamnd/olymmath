---
tag: 96EMWY7Y2H
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a integer $1<n<2010$, where we have a polygon with $2010$ sides and $n$ coins, we have to paint the vertices of this polygon with $n$ colors and we've to put the $n$ coins in $n$ vertices of the polygon. In each second the coins will go to the neighbour vertex, going in the clockwise.
Determine the values of $n$ such that is possible paint and choose the initial position of the coins where in each second the $n$ coins are in vertices of distinct colors
