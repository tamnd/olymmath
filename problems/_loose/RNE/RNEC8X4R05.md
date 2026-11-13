---
tag: RNEC8X4R05
kind: problem
type: answer
answer: a. No; b. No
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=64
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
a sequence $(a_n)_{n=1}^{\infty}$ of natural numbers has the property that for any $n \ge 1$, $a_{n+1} = a_n + b_n$, where $b_n$ is the number having the same digits as $a_n$, but in the reverse order (unlike $a_n$, the number $b_n$ may start with one or more zeroes in the decimal notation). For instance, if $a_1 = 170$ we have $a_2 = 170 + 71 = 241$, $a_3 = 241 + 142 = 383$, and so on.

a. Can the number $a_6$ be prime?

b. Can the number $a_7$ be prime?
