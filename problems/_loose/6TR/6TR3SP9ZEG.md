---
tag: 6TR3SP9ZEG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444940
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2022
    source: hf-ai-mo-aops
    label: 2022 Princeton University Math Competition
---
A permutation $\pi : \{1,2,\ldots,N\} \rightarrow \{1,2, \ldots,N\}$ is *very odd* if the smallest positive integer $k$ such that $\pi^k(a) = a$ for all $1 \le a \le N$ is odd, where $\pi^k$ denotes $\pi$ composed with itself $k$ times. Let $X_0 = 1,$ and for $i \ge 1,$ let $X_i$ be the fraction of all permutations of $\{1,2,\ldots,i\}$ that are very odd. Let $S$ denote the set of all ordered $4$ -tuples $(A,B,C,D)$ of nonnegative integers such that $A+B +C +D =2023.$ Find the last three digits of the integer $$ 2023\sum_{(A,B,C,D) \in S} X_AX_BX_CX_D. $$
