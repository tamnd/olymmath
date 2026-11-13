---
tag: ZXT4Y30B4R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=97
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $n$ be a positive integer and let $a_{1}, a_{2}, \ldots, a_{n}$ be any real numbers. Prove that there exists $m, k \in \{1,2, \ldots, n\}$ such that
$$
\left|\sum_{i=1}^{m} a_{i}-\sum_{i=m+1}^{n} a_{i}\right| \leq\left|a_{k}\right| .
$$
