---
tag: 7KXP58WMDN
kind: problem
type: answer
answer: P(x) = x + c \text{ and } P(x) = -x + c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(x)$ of degree $1$ such that
$\underset {a\le x\le b}{max} P(x) - \underset {a\le x\le b}{min} P(x) =b-a$ , $\forall a,b\in R$ where $a < b$
