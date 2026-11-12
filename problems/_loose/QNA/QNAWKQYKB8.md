---
tag: QNAWKQYKB8
kind: problem
type: answer
answer: "915"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a natural number $n$ squareable if the numbers from 1 to $n$ can be arranged in such an order that each member of the sequence, when added to its position, results in a perfect square. For example, the number 5 is squareable, as the numbers can be arranged as: 32154, in which $3+1=2+2=1+3=4$ and $5+4=4+5=9$. Determine which of the numbers $7,9,11,15$ are squareable.
