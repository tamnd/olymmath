---
tag: N5NBY0W3G0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXXI Brazilian Math Olympiad
---
Given positive integers $n$, $a_1$, $a_2$, $\dots$, $a_n$, define $q_0 = 1$, $q_1 = a_1$ and $q_{k+1} = a_{k+1}q_k + q_{k-1}$, for $1 \le k \le n-1$.
Prove that, given $c > 1$, there exists $K > 0$ such that, for all $M > K$, there exist a positive integer $n$ and $a_1, a_2, \dots, a_n \in \{1, 2\}$ such that $M \le q_n < c \cdot M$.
