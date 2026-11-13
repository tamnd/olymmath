---
tag: AAK20NZ3MS
kind: problem
type: answer
answer: k = m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl
    source: hf-mathnet
    label: Balkan Mathematical Olympiad Balkan Mathematical Olympiad Shortlisted Problems
---
Let $n$ and $m$ be positive integers with $n \ge 2$. There are $n$ piles having $a_1, \dots, a_n$ stones such that for each $1 \le i \le n$ we have $m \le a_i \le m \cdot i$ (so $a_1 = m$). Aida and Bob play the following game: on each round, Bob picks two non-empty piles (if possible) and he removes a number of stones from the pile with fewer stones (in the case of equality, he chooses randomly). Then Aida decides whether she removes the same number of stones from the other pile or she moves the stones Bob just removed to the other pile. If there is at most one non-empty pile, the game ends.
Find the smallest positive integer $k$ such that Aida can guarantee that at some point there will be at most $k$ stones, regardless of the sequence $a_1, \dots, a_n$ and of how Bob plays.
