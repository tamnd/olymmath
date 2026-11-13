---
tag: ZEAB9WRBRS
kind: problem
type: answer
answer: P()=aX^2+bX
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P \in \mathbb{R}[X]$ such that for all real numbers $a, b, c$ we have:

$$
P(a+b-2 c)+P(b+c-2 a)+P(c+a-2 b)=3 P(a-b)+3 P(b-c)+3 P(c-a) .
$$
