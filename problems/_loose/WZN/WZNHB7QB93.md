---
tag: WZNHB7QB93
kind: problem
type: answer
answer: "1122"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2016
    source: hf-mathnet
    label: Argentina Argentine National Olympiad 2016
---
Let $a_1, a_2, ..., a_{100}$ be a permutation of $1, 2, ..., 100$. For each triple $\{a_i, a_{i+1}, a_{i+2}\}$ of consecutive numbers, $1 \le i \le 98$, the middle number in the triple is marked. For instance if $a_i = 7, a_{i+1} = 99, a_{i+2} = 22$ then $a_{i+2} = 22$ is marked. Let $S$ be the sum of all marked numbers. Find the minimum value of $S$. (Each marked number enters the sum $S$ exactly once, although it may be marked more than once.)
