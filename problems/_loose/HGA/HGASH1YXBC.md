---
tag: HGASH1YXBC
kind: problem
type: answer
answer: "2010"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=8
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
An increasing sequence of positive integers $\{a_n\}$ and a positive integer $k$ are given. For each positive integer $n$ the following conditions hold: the number $a_n$ is divisible either by $1005$ or by $1006$, $a_n$ is not divisible by $97$, and $a_{n+1} - a_n \le k$. Find the least possible value of $k$. (A. Golovanov)
