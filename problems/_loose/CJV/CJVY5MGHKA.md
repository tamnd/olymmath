---
tag: CJVY5MGHKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825826
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2021
    source: hf-ai-mo-aops
    label: 2021 Princeton University Math Competition
---
Given a positive integer $n$ with prime factorization $p_1^{e_1}p_2^{e_2}... p_k^{e_k}$ , we define $f(n)$ to be $\sum^k_{i=1}p_ie_i$ . In other words, $f(n)$ is the sum of the prime divisors of $n$ , counted with multiplicities. Let $M$ be the largest odd integer such that $f(M) = 2023$ , and $m$ the smallest odd integer so that $f(m) = 2023$ . Suppose that $\frac{M}{m}$ equals $p_1^{e_1}p_2^{e_2}... p_l^{e_l}$ , where the $e_i$ are all nonzero integers and the $p_i$ are primes. Find $\left| \sum^l_{i=1} (p_i + e_i) \right|$ .
