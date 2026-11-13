---
tag: 6GTWXNP6EM
kind: problem
type: answer
answer: 'First ant: 300; Second ant: 110'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
All integers from $1$ to $12$ are written on the edges of a cube so that every edge has exactly one integer. Two robot ants stand in the same vertex of the cube and wish to arrive at the vertex that is furthest away from them. Each ant picks a path consisting of exactly three edges of the cube. They multiply the integers on their path. The product of the integers on the path of the first ant is divisible by $100$, but not by $200$. The sum of the digits of the product of the integers on the path of the second ant is $2$ and the integer $1$ is not on its path. Find all possible products that either ant can get.
