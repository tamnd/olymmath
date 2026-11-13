---
tag: MEPQCQD4MF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=56
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $N$ empty boxes in a row on a table and an unlimited supply of pebbles. Given a positive integer $n$, Alice and Bob play the following game.
In the first round, Alice takes $n$ pebbles and distributes them into the $N$ boxes as she wishes. Each subsequent round consists of two steps:
(i) Bob chooses an integer $k$ with $1 \le k < N$ and splits the boxes into the two groups $B_1, \dots, B_k$ and $B_{k+1}, \dots, B_N$.
(ii) Alice picks one of these two groups, adds one pebble to each box in that group, and removes one pebble from each box in the other group.
Bob wins if, at the end of any round, some box contains no pebbles. Let $M = \lfloor \frac{N}{2} + 1 \rfloor^2 - 1$ where $\lfloor x \rfloor$ denotes the largest integer not exceeding $x$.
(a) Prove that, for any $n \ge M$, Alice has a strategy so that Bob can never win.
(b) Prove that, for any $n < M$, Bob has a strategy to guarantee a win.
