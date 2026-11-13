---
tag: 8A7JVMJ3JE
kind: problem
type: answer
answer: k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=18
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2011
    source: hf-mathnet
    label: Baltic Way Baltic Way 2011 Problem Shortlist
---
Call an *n*-tuple $(a_1, \dots, a_n)$ of real numbers *stable* if the sums $a_1 + a_2 + \dots + a_k$ where $0 < k \le n$, as well as the sums $a_n + a_{n-1} + \dots + a_{n-k}$ where $0 \le k < n$, are either all negative or all non-negative.

Let $k$ be any natural number. Consider all stable $(2k+1)$-tuples consisting of real numbers that are alternately negative and non-negative. Find the least possible number of stable subtuples with more than one element that can be contained in such a tuple.

(A Subtuple of $(a_1, \dots, a_n)$ is any tuple $(a_i, \dots, a_j)$, $1 \le i \le j \le n$, of elements consecutive in the original tuple.)
