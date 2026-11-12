---
tag: Z1DVNM9X6H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Bulgarian Winter Tournament
    url: https://artofproblemsolving.com/community/c6h3488508
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2496
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-winter/2025
    source: hf-ai-mo-aops
    label: 2025 Bulgarian Winter Tournament
---
Let $A$ be a set of $2025$ non-negative integers and $f: \mathbb{Z}_{>0} \to \mathbb{Z}_{>0}$ be a function with the following two properties:

1) For every two distinct positive integers $x,y$ there exists $a\in A$ , such that $x-y$ divides $f(x+a) - f(y+a)$ .

2) For every positive integer $N$ there exists a positive integer $t$ such that $f(x) \neq f(y)$ whenever $x,y \in [t, t+N]$ are distinct.

Prove that there are infinitely many primes $p$ such that $p$ divides $f(x)$ for some positive integer $x$ .
