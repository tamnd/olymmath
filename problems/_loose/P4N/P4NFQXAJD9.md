---
tag: P4NFQXAJD9
kind: problem
type: answer
answer: n - 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2016
    source: hf-mathnet
    label: Slovenia Slovenija 2016
---
Assume that $n \ge 3$ people of different ages sit around a round table. We call any pair consisting of two people $A$ and $B$ a *newbie pair*, if
(i) $A$ and $B$ do not sit next to one another and
(ii) on at least one of the arcs connecting $A$ and $B$ along the table edge all people are older than $A$ and $B$.
Determine the minimal number of newbie pairs. (From Nordic MO 2008.)
