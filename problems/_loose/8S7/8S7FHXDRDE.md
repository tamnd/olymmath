---
tag: 8S7FHXDRDE
kind: problem
type: answer
answer: 2, 4, 10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n > 1$, let $1 = a_1 < a_2 < \dots < a_t = n - 1$ be all the positive integers that are less than $n$ and coprime to $n$. Determine all values of $n$ for which there is no index $i \in \{1, \dots, t-1\}$ satisfying $3 \mid a_i + a_{i+1}$.
