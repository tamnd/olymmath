---
tag: Z94PAV6BTZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h2683441
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37064
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Costa Rica - Final Round
---
A positive natural number $n$ is said to be *comico* if its prime factorization is $n = p_1p_2...p_k$ , with $k\ge 3$ , and also the primes $p_1,..., p_k$ they fulfill that $p_1 + p_2 = c^2_1$ $p_1 + p_2 + p_3 = c^2_2$ $...$ $p_1 + p_2 + ...+ p_n = c^2_{n-1}$ where $c_1, c_2, ..., c_{n-1}$ are positive integers where $c_1$ is not divisible by $7$ .
Find all comico numbers less than $10,000$ .
