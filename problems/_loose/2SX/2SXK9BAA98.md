---
tag: 2SXK9BAA98
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1808634
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2019
    source: hf-ai-mo-aops
    label: 2019 Olympic Revenge
---
Define $f: \mathbb{N} \rightarrow \mathbb{N}$ by $$ f(n) = \sum \frac{(1+\sum_{i=1}^{n} t_i)!}{(1+t_1) \cdot \prod_{i=1}^{n} (t_i!) } $$ where the sum runs through all $n$ -tuples such that $\sum_{j=1}^{n}j \cdot t_j=n$ and $t_j \ge 0$ for all $1 \le j \le n$ .
Given a prime $p$ greater than $3$ , prove that $$ \sum_{1 \le i < j <k \le p-1 } \frac{f(i)}{i \cdot j \cdot k} \equiv \sum_{1 \le i < j <k \le p-1 } \frac{2^i}{i \cdot j \cdot k} \pmod{p}. $$
