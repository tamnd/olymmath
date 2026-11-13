---
tag: 4PDJR9V7GX
kind: problem
type: answer
answer: \{1, 2, 3, 4, 5, 6\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the set of all permutations $f$ of $\{1, 2, ... , n\}$ that satisfy the condition:
$f(i) \geq i-1$ $i=1,...,n$
one is chosen uniformly at random. Let $p_n$ be the probability that the chosen permutation $f$ satisfies
$f(i) \leq i+1$ $i=1,...,n$
Find all natural numbers $n$ such that $p_n > \frac{1}{3}$.
