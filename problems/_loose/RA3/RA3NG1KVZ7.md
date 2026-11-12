---
tag: RA3NG1KVZ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h3281089
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Costa Rica - Final Round
---
Let $\mathbb Z^{\geq 0}$ be the set of all non-negative integers. Consider a function $f:\mathbb Z^{\geq 0} \to \mathbb Z^{\geq 0}$ such that $f(0)=1$ and $f(1)=1$ , and that for any integer $n \geq 1$ , we have
$$f(n + 1)f(n - 1) = nf(n)f(n - 1) + (f(n))^2.$$
Determine the value of $f(2023)/f(2022)$ .
