---
tag: TTBC8KGFZX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3330148
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2024
    source: hf-ai-mo-aops
    label: 2024 India IMOTC
---
At an IMOTC party, all people have pairwise distinct ages. Some pairs of people are friends and friendship is mutual. Call a person *junior* if they are younger than all their friends, and *senior* if they are older than all their friends. A person with no friends is both *junior* and *senior*. A sequence of pairwise distinct people $A_1, \dots, A_m$ is called *photogenic* if:
1. $A_1$ is *junior*,
2. $A_m$ is *senior*, and
3. $A_i$ and $A_{i+1}$ are friends, and $A_{i+1}$ is older than $A_i$ for all $1 \leq i \leq m-1$ .

Let $k$ be a positive integer such that for every *photogenic* sequence $A_1, \dots, A_m$ , $m$ is not divisible by $k$ . Prove that the people at the party can be partitioned into $k$ groups so that no two people in the same group are friends.

*Proposed by Shantanu Nene*
