---
tag: FS85W3MJV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585194
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2654
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2025
    source: hf-ai-mo-aops
    label: 2025 India IMOTC
---
Let $n$ be a positive integer. Alice and Bob play the following game. Alice considers a permutation $\pi$ of the set $[n]=\{1,2, \dots, n\}$ and keeps it hidden from Bob. In a move, Bob tells Alice a permutation $\tau$ of $[n]$ , and Alice tells Bob whether there exists an $i \in [n]$ such that $\tau(i)=\pi(i)$ . Bob wins if he ever tells Alice the permutation $\pi$ . Prove that Bob can win the game in at most $n \log_2(n) + 2025n$ moves.

*Proposed by Siddharth Choppara and Shantanu Nene*
