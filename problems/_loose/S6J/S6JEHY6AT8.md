---
tag: S6JEHY6AT8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ towns in a country. Some of them are connected with domestic flights. Each flight connects exactly two towns. If there is a flight from town $A$ to town $B$, then there is a flight from $B$ to $A$. It is known that for any two towns there exists a unique route such that one can reach the second town from the first one using at most two flights. There is no town that is connected with all other towns of the country with the direct flights.
Prove that $n-1$ is a square of some integer number.
