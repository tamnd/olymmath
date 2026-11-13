---
tag: VKQ444SC7A
kind: problem
type: answer
answer: n \leq k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Monica and Bogdan are playing a game, depending on given integers $n, k$. First, Monica writes some $k$ positive numbers. Bogdan wins, if he is able to find $n$ points on the plane with the following property: for any number $m$ written by Monica, there are some two points chosen by Bogdan with distance exactly $m$ between them. Otherwise, Monica wins.

Determine who has a winning strategy depending on $n, k$.

*(Proposed by Fedir Yudin)*
