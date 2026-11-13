---
tag: ER04H9ZNAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
In a country, there are $n$ cities; some pairs of them are connected with two-way direct flights. There is a unique (perhaps, non-direct) route between every two cities. The mayor of each city $X$ found the number $f(X)$ of the enumerations of all cities by $1, 2, \ldots, n$ such that along each route starting at $X$, the city numbers increase. All the mayors except one noticed that their resulting numbers are all divisible by $2016$. Prove that the remaining mayor's number is also divisible by $2016$.
(F. Petrov)
