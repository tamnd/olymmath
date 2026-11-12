---
tag: KEHC9EZPNW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3643999
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44489
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Iran MO (3rd Round)
---
A permutation of the numbers $1, 2, \ldots, 1404$ is arranged in a circle as $a_1, a_2, \ldots, a_{1404}$, with $a_{1405} = a_1$. Define the distance for index $i$ as:
$$
d(i) = \min(i - 1, 1405 - i).
$$
In each step, we can select a number $i$ that satisfies one of the following two conditions and swap $a_i$ and $a_{i+1}$ (indices modulo 1404):

$A: a_i < a_{i+1}$ and $d(i) > d(i+1)$,
$B: a_{i+1} < a_i$ and $d(i+1) > d(i)$.

A permutation is called **golden** if we can reach the permutation $1, 2, \ldots, 1404$ in finitely many such operations. Find the number of golden permutations.
