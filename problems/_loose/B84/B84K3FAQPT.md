---
tag: B84K3FAQPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3066898
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
Define the two sequences $a_0, a_1, a_2, \cdots$ and $b_0, b_1, b_2, \cdots$ by $a_0 = 3$ and $b_0 = 1$ with the recurrence relations $a_{n+1} = 3a_n + b_n$ and $b_{n+1} = 3b_n - a_n$ for all nonnegative integers $n.$ Let $r$ and $s$ be the remainders when $a_{32}$ and $b_{32}$ are divided by $31,$ respectively. Compute $100r + s.$
