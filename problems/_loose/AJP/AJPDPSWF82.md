---
tag: AJPDPSWF82
kind: problem
type: answer
answer: P(x) = 0, \quad P(x) = x, \quad P(x) = -x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)$ with real coefficents, such that for all $x,y,z$ satisfying $x+y+z=0$, the equation below is true: $$P(x+y)^3+P(y+z)^3+P(z+x)^3=3P((x+y)(y+z)(z+x))$$
