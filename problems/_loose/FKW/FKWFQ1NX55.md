---
tag: FKWFQ1NX55
kind: problem
type: answer
answer: All positive integers divisible by 3.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XXVII Olimpiada Matemática Rioplatense
---
For every positive integer $m$, we write $S(m)$ for the sum of its digits. For example, $S(2018) = 2+0+1+8=11$.
We say a positive integer $n$ is *rioplatense* if there is a positive integer $m$ such that $m + 2S(m) = n$.
Find all positive integers that are *rioplatenses*.
