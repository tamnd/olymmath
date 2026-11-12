---
tag: 4R3NTK3RPJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165931
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2015
    source: hf-ai-mo-aops
    label: 2015 Princeton University Math Competition
---
For an odd prime number $p$ , let $S$ denote the following sum taken modulo $p$ :
$$ S \equiv \frac{1}{1 \cdot 2} + \frac{1}{3\cdot 4} + \ldots + \frac{1}{(p-2)\cdot(p-1)} \equiv \sum_{i=1}^{\frac{p-1}{2}} \frac{1}{(2i-1) \cdot 2i} \pmod p$$
Prove that $p^2 | 2^p - 2$ if and only if $S \equiv 0 \pmod p$ .
