---
tag: TKH5032HDY
kind: problem
type: answer
answer: ⌊n^2/4⌋ + 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China China Mathematical Olympiad
---
Given an integer $n \ge 2$. Suppose $A_1, A_2, \dots, A_n$ are $n$ nonempty finite sets satisfying: $|A_i \Delta A_j| = |i-j|$ for all $i, j \in \{1, 2, \dots, n\}$.
Find the minimum value of $|A_1| + |A_2| + \dots + |A_n|$. (Here $|X|$ denotes the number of elements of a finite set $X$ and $X \Delta Y = \{a \mid a \in X, a \notin Y\} \cup \{a \mid a \in Y, a \notin X\}$ for any sets $X$ and $Y$.)
