---
tag: R2EWQCMKGX
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Mathematical Olympiad
---
A total of $2^n$ coins are distributed among several children. If one of the children has at least half of the coins, the coins are redistributed: coins are transferred from such a child to each of the other children in such a way that each of them gets as many coins as it had. In the case when one child possesses all the coins there is no possibility for redistribution. What is the greatest number of consecutive redistributions? (For example, if $32$ coins are distributed among $6$ children in the following way: $17$, $2$, $9$, $1$, $2$, $1$, then after one redistribution the children will have: $2$, $4$, $18$, $2$, $4$, $2$ coins, respectively; in the example, that number is $2$).
Explain your answer!
