---
tag: ZADSNMD514
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h3287341
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Taiwan TST Round 2
---
Find all functions $f:\mathbb{N}\to\mathbb{N}$ s.t. for all $A\subset \mathbb{N}$ with 2024 elements, the set $$ S_A:=\{f^{(k)}(x)\mid k=1,...,2024,x\in A\} $$ also has 2024 elements. ( $f^{(k)}=f\circ f\circ...\circ f$ is the $k$ -th iteration of $f$ .)
