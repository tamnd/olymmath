---
tag: 12KGPAEYJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Round 3
---
Let $p \ge 3$ be a prime number. There are $n = 2p$ integers on the blackboard. A student chooses one or more numbers and writes down their sum modulo $n$. Suppose that the remainders $1, 2, \dots, p-1, p+1, \dots, n-1$ appear the same number of times when the student writes down all $2^n - 1$ possible sums modulo $n$. Prove that the sum of the numbers on the blackboard is divisible by $p$.

(Proposed by Bayarmagnai Gombodorj)
