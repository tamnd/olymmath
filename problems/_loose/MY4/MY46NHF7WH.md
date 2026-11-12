---
tag: MY46NHF7WH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3585181
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2649
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
Let $N \geqslant 2024!$ be a positive integer. Alice and Bob play the following game, with Alice going first after which they alternate turns. They determine the numbers $a_0,a_1, a_2, \ldots, a_{2025}$ in the following way.

On the $k$ th turn, the player whose turn it is sets $a_{k-1}$ to be an integer such that: $\bullet$ $1\leqslant a_{k-1}\leqslant N$ $\bullet$ There exists a polynomial $P$ with integer coefficients and $ P(i) = a_i$ for $0 \leqslant i \leqslant k-1$ Alice wins if and only if Bob is unable to pick a value in one of his moves i.e. $a_{1}, a_3,\ldots$ . In particular, she also loses if Bob is able to pick $a_{2025}$ successfully.
Determine all values of $N$ for which Alice can ensure that she wins regardless of Bob's strategy.

*Proposed by Atul Shatavart Nadig and Rohan Goyal*
