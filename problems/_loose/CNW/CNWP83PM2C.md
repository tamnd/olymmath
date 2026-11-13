---
tag: CNWP83PM2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=49
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo
    source: hf-mathnet
    label: China China Girls' Mathematical Olympiad
---
Suppose $n$ small balls have been placed into $n$ numbered boxes $B_1, B_2, \dots, B_n$. Each time we can select a box $B_k$ and do the following operations:
(1) If $k=1$ and there is at least one ball in $B_1$, move one ball from $B_1$ into $B_2$.
(2) If $k=n$ and there is at least one ball in $B_n$, move one ball from $B_n$ into $B_{n-1}$.
(3) If $2 \le k \le n-1$ and there are at least two balls in $B_k$, move one ball from $B_k$ into $B_{k+1}$ and one ball into $B_{k-1}$, respectively.

Prove the following: no matter how the balls are distributed among the boxes originally, it is always realizable to let each box contain exactly one ball by finite operations.
