---
tag: V0GMSNRVE4
kind: problem
type: answer
answer: minimum 0, maximum n(n+1)(2n+1)/6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
$2n + 1$ distinct points are chosen on a circle and each two of them are connected with a vector going in one of the two possible directions. Let $R$ be the number of triangles with the vertices at the given points such that the sum of the vectors going along the sides of the triangle is equal to zero, (i.e. starting from any vertex, the vectors will go back to itself). Find the smallest and the biggest possible values of $R$.
