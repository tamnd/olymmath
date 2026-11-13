---
tag: 3SJVE053GQ
kind: problem
type: answer
answer: "238"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for all numbers $n \in N$ that have the following properties:

1. The decimal representation requires exactly three pairwise different digits $a$, $b$, and $c$.
2. Here, $a$ and $b$ each appear exactly $c$ times; $c$, on the other hand, appears $(a-b)$ times.
3. The sum of the digits and the product of the digits of $n$ are equal.
