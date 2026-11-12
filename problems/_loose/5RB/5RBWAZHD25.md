---
tag: 5RBWAZHD25
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Iran MO (3rd round)
    url: https://artofproblemsolving.com/community/c6h1139106
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Iran MO (3rd round)
---
$M_0 \subset \mathbb{N}$ is a non-empty set with a finite number of elements.
Ali produces sets $ M_1,M_2,...,M_n $ in the following order:
In step $n$ , Ali chooses an element of $M_{n-1} $ like $b_n$ and defines $M_n$ as $$ M_n = \left \{ b_nm+1 \vert m\in M_{n-1} \right \} $$ Prove that at some step Ali reaches a set which no element of it divides another element of it.
