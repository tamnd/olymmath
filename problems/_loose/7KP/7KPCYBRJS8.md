---
tag: 7KPCYBRJS8
kind: problem
type: answer
answer: "2020"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of natural numbers $a_{n}$, the terms of which satisfy

the relations $a_{n+1}=k \cdot \frac{a_{n}}{a_{n-1}}$ (for $n \geq 2$). All terms of the sequence are integers. It is known that $a_{1}=1$, and $a_{2018}=2020$. Find the smallest natural $k$ for which this is possible.
