---
tag: 7MPRSMCN8N
kind: problem
type: answer
answer: '[\frac{3n}{2}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We form all $n$-length words from a $k$-element ABC, which consist of all different letters. We connect two such words with an edge if they differ in exactly one position. What is the diameter of the graph thus obtained?
