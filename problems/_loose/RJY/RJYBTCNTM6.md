---
tag: RJYBTCNTM6
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way SHL
---
Let $n > 2$ be a natural number. In the country there are $n$ cities and every two of them are connected by a direct road. We enumerate roads with numbers $1, 2, \ldots, m$ (we can assign the same number to several roads, even if they are going from the same city), where $m$ is a natural number. The *ID* of a city is a sum of numbers assigned to roads which are going from it. Find the smallest $m$ such that it is possible to enumerate the roads in such way that ID's of the cities are all distinct.
