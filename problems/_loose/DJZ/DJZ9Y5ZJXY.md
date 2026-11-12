---
tag: DJZ9Y5ZJXY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Thailand Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3317901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: th-tmo/2024
    source: hf-ai-mo-aops
    label: 2024 Thailand Mathematical Olympiad
---
Prove that for all positive integers $n$ , there exists a sequence of positive integers $a_1,a_2,\dots,a_n$ and $d_1,d_2,\dots,d_n$ satisfying all of the following three conditions.

- $\binom{2a_i}{a_i}$ is divisible by $d_i$ for all $i=1,2,\dots,n$
- $d_{i+1}=d_i+1$ for all $i=1,2,\dots, n-1$
- $d_i\neq m^k$ for all $i=1,2,\dots, n$ and positive integers $m$ and $k$ such that $k\geq 2$
