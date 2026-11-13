---
tag: 585V2XVQFW
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are 800 points on a circle, labeled $1, 2, \cdots$, 800 in a clockwise direction, dividing the circle into 800 arcs. Now, choose any one point and color it red, then proceed to color other points red according to the following rule: if the $k$-th point has been colored red, then move $k$ arcs in a clockwise direction and color the point reached red, and continue this process. How many red points can be obtained at most on the circle? Explain your reasoning.
