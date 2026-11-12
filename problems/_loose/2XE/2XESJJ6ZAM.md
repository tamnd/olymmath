---
tag: 2XESJJ6ZAM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3457043
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2024
    source: hf-ai-mo-aops
    label: 2024 Rioplatense Mathematical Olympiad
---
Let $S = \{2, 3, 4, \dots\}$ be the set of positive integers greater than 1. Find all functions $f : S \to S$ that satisfy
$$
\text{gcd}(a, f(b)) \cdot \text{lcm}(f(a), b) = f(ab)
$$
for all pairs of integers $a, b \in S$ .

Clarification: $\text{gcd}(a,b)$ is the greatest common divisor of $a$ and $b$ , and $\text{lcm}(a,b)$ is the least common multiple of $a$ and $b$ .
