---
tag: HPNJ96AQK0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist a set $S$ of positive integers satisfying the following conditions?

$\text{(i)}$ $S$ contains $2020$ distinct elements;

$\text{(ii)}$ the number of distinct primes in the set $\{\gcd(a, b) : a, b \in S, a \neq b\}$ is exactly $2019$; and

$\text{(iii)}$ for any subset $A$ of $S$ containing at least two elements, $\sum\limits_{a,b\in A; a<b}
ab$ is not a prime power.
