---
tag: V6QA4SYJW1
kind: problem
type: answer
answer: P+Q+R=x+y+z
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133807
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let positive numbers $a, b, c$ satisfy $a+b+c=1, x, y, z$ be real numbers: $P=a x+b y+c z ; Q=$ $b x+c y+a z ; R=c x+a y+b z$. Then the size relationship between $P+Q+R$ and $x+y+z$ is
A. Equal
B. $P+Q+R>x+y+z$
C. $P+Q+R<x+y+z$
D. None of the above
