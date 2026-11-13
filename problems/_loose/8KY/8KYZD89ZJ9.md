---
tag: 8KYZD89ZJ9
kind: problem
type: answer
answer: all integers m with 1 ≤ m ≤ floor(n/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n \ge 2$ cities in a country. Some pairs of cities are connected with an air communication, and for any such pair the connection is mutual. It is possible to travel from one city to another (possibly with a couple of flights). It is also known that the minimal number of flights that are needed to travel from any given city to another doesn't exceed the same number $m$, and for any city $A$ there exists another city $B$ which cannot be reached from $A$ by less than $m$ flights.
Given $n$, find all possible values of $m$, for which it is possible.
(Aliaksei Vaidzelevich)
