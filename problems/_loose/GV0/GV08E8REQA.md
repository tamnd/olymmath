---
tag: GV08E8REQA
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=84
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
Let the sequence $(u_n)$ be defined recursively by
$$
u_0 = 0,\ u_1 = 1,\ u_n = 2011u_{n-1} - u_{n-2} \text{for } n \ge 2.$$
Find all the values of $n$ for which $u_n$ is prime.
