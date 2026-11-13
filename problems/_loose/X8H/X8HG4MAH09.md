---
tag: X8HG4MAH09
kind: problem
type: answer
answer: '[\frac{(n+1)^{2}}{4}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a triangle with all three sides of positive integer lengths, given one side of length $n$, the other two sides are no longer than $n$, and congruent triangles are counted as one. The number of such triangles is
A. $\frac{n(n+2)}{4}$
B. $\frac{(n+1)^{2}}{4}$
C. $\left[\frac{(n+1)^{2}}{4}\right]$
D. $\left[\frac{(n+1)^{2}}{2}\right]$
