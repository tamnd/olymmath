---
tag: KKQX0TTVRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, a subset $S$ of $\{1,2,\dots,n\}$ is called an $n$-good set if for any elements $x,y$ in $S$ (they can be the same), if $x+y \le n$, then $x+y \in S$.
For a positive integer $n$, define $r_n$ as the smallest real number such that for any positive integer $m \le n$, there exists an $n$-good set with $m$ elements, whose sum of all elements does not exceed $m \cdot r_n$.
Prove that there exists a real number $\alpha$ such that for any positive integer $n$, we have $|r_n - \alpha n| < 2024$.
