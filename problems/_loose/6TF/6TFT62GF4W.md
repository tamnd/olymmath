---
tag: 6TFT62GF4W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$p, q, r$ are natural numbers greater than 1.

There are $pq$ balls placed on a circle, and one number among $0, 1, 2, \cdots , pr-1$ is written on each ball, satisfying following conditions.

(1) If $i$ and $j$ is written on two adjacent balls, $|i-j|=1$ or $|i-j|=pr-1$.
(2) $i$ is written on a ball $A$. If we skip $q-1$ balls clockwise from $A$ and see $q^{th}$ ball, $i+r$ or $i-(p-1)r$ is written on it. (This condition is satisfied for every ball.)

If $p$ is even, prove that the number of pairs of two adjacent balls with $1$ and $2$ written on it is odd.
