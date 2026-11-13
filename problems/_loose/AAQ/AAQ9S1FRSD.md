---
tag: AAQ9S1FRSD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Given $2021$ distinct positive integers $a_1, a_2, \dots, a_{2021}$. Define the sequence $\{a_n\}$ inductively as follows: for each integer $n \ge 2022$, $a_n$ is the smallest positive integer different from $a_1, a_2, \dots, a_{n-1}$ and not dividing the product $a_{n-1}a_{n-2}\dots a_{n-2021}$. Prove: there exists a positive integer $M$, such that all integers greater than or equal to $M$ appear in $\{a_n\}$.
