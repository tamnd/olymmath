---
tag: EP8AQ9PRB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620742
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16819
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $p = 2017$ . Given a positive integer $n$ , an $n\times n$ matrix $A$ is formed with each element $a_{ij}$ randomly selected, with equal probability, from $\{0,1,\ldots,p - 1\}$ . Let $q_n$ be probability that $\det A\equiv 1\pmod{p}$ . Let $q= \lim_{n\rightarrow\infty} q_n$ . If $d_1, d_2, d_3, \ldots$ are the digits after the decimal point in the base $p$ expansion of $q$ , then compute the remainder when $ \sum_{k = 1}^{p^2} d_k$ is divided by $10^9$ .

*Proposed by Ashwin Sah*
