---
tag: VZ4SNFGYJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 BMT
    url: https://artofproblemsolving.com/community/c6h3278469
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70506
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2023
    source: hf-ai-mo-aops
    label: 2023 BMT
---
Let $N$ be the number of positive integers $x$ less than $210 \cdot 2023$ such that $$ lcm(gcd(x, 1734), gcd(x + 17, x + 1732)) $$ divides $2023$ . Compute the sum of the prime factors of $N$ with multiplicity. (For example, if $S = 75 = 3^1 \cdot 5^2$ , then the answer is $1\cdot 3 + 2 \cdot 5 = 13$ ).
