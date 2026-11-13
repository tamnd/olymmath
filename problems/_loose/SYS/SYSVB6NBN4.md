---
tag: SYSVB6NBN4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1300990
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
A sequence $P=\left \{ a_{n} \right \}$ is called a $ \text{Permutation}$ of natural numbers (positive integers) if for any natural number $m,$ there exists a unique natural number $n$ such that $a_n=m.$

We also define $S_k(P)$ as: $S_k(P)=a_{1}+a_{2}+\cdots +a_{k}$ (the sum of the first $k$ elements of the sequence).

Prove that there exists infinitely many distinct $ \text{Permutations}$ of natural numbers like $P_1,P_2, \cdots$ such that $:$ $$ \forall k, \forall i<j: S_k(P_i)|S_k(P_j) $$
