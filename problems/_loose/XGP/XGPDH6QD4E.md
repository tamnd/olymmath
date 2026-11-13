---
tag: XGPDH6QD4E
kind: problem
type: answer
answer: (i) 1; (ii) -(n-2)/(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=16
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
Let $n \ge 3$ be fixed. A sequence $a_1, a_2, \dots, a_n$ of real numbers is *nice* if
$$
0 \le a_1 + \dots + a_{k-1} + a_{k+1} + \dots + a_n \le 1
$$
for all $1 \le k \le n$. Let $m = \min\{a_1, a_2, \dots, a_n\}$ denote the minimum and let $M = \max\{a_1, a_2, \dots, a_n\}$ denote the maximum of the sequence $a_1, a_2, \dots, a_n$.
(i) Find the maximum of $M$ over all nice sequences.
(ii) Find the minimum of $m$ over all nice sequences.
