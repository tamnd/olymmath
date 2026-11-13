---
tag: ZWSVJ1TZV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 3$ be a positive integer. There are $n$ Jujutsushis in total from $k$ different schools, labeled from 1 to $n$. It is known that when two Jujutsushis fight, the one with the smaller label will win. It is also known that if $\{x_1, x_2, \dots, x_n\}$ is a permutation of $\{1, 2, \dots, n\}$, then among the $n-1$ fights between Jujutsushi number $x_1$ and $x_2$, $x_2$ and $x_3$, $\dots$, $x_{n-1}$ and $x_n$, the set of winners will contains at least one Jujutsushi from each of the $k$ schools. Prove that $n \ge 2^k$.
