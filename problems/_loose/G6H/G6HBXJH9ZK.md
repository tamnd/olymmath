---
tag: G6HBXJH9ZK
kind: problem
type: answer
answer: 21^5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C$ be the set of all 100-digit numbers consisting of only the digits $1$ and $2$. Given a number in $C$, we may transform the number by considering any $10$ consecutive digits $x_0x_1x_2 \dots x_9$ and transform it into $x_5x_6\dots x_9x_0x_1\dots x_4$. We say that two numbers in $C$ are similar if one of them can be reached from the other by performing finitely many such transformations. Let $D$ be a subset of $C$ such that any two numbers in $D$ are not similar. Determine the maximum possible size of $D$.
