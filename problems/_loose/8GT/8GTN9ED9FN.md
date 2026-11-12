---
tag: 8GTN9ED9FN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2576987
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71787
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2021
    source: hf-ai-mo-aops
    label: 2021 Harvard-MIT Mathematics Tournament
---
Let $n$ be the product of the first $10$ primes, and let $$ S=\sum_{xy\mid n} \varphi(x) \cdot y, $$ where $\varphi(x)$ denotes the number of positive integers less than or equal to $x$ that are relatively prime to $x$ , and the sum is taken over ordered pairs $(x, y)$ of positive integers for which $xy$ divides $n$ . Compute $\tfrac{S}{n}.$
