---
tag: 950GXDJ7XA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3043609
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2022
    source: hf-ai-mo-aops
    label: 2022 Stanford Mathematics Tournament
---
Let $n_0$ be the product of the first $25$ primes. Now, choose a random divisor $n_1$ of $n_0$ , where a choice $n_1$ is taken with probability proportional to $\phi(n_1)$ . ( $\phi(m)$ is the number of integers less than $m$ which are relatively prime to $m$ .) Given this $n_1$ , we let $n_2$ be a random divisor of $n_1$ , again chosen with probability proportional to $\phi(n_2)$ . Compute the probability that $n_2\equiv0\pmod{2310}$ .
