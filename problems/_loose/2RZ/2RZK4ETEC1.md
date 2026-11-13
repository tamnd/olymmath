---
tag: 2RZK4ETEC1
kind: problem
type: answer
answer: All composite numbers except those equal to the product of two distinct primes.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
找出所有合成數 $n$, 使得 $n$ 的比 $1$ 大的正因數擺在一個圓上, 相鄰的兩個都不會互質。
