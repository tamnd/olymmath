---
tag: ZYDXC0R9ZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3210023
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2023
    source: hf-ai-mo-aops
    label: 2023 Princeton University Math Competition
---
Given $n \geq 1$ , let $A_{n}$ denote the set of the first $n$ positive integers. We say that a bijection $f: A_{n} \rightarrow A_{n}$ has a hump at $m \in A_{n} \backslash\{1, n\}$ if $f(m)>f(m+1)$ and $f(m)>f(m-1)$ . We say that $f$ has a hump at 1 if $f(1)>f(2)$ , and $f$ has a hump at $n$ if $f(n)>f(n-1)$ . Let $P_{n}$ be the probability that a bijection $f: A_{n} \rightarrow A_{n}$ , when selected uniformly at random, has exactly one hump. For how many positive integers $n \leq 2020$ is $P_{n}$ expressible as a unit fraction?
