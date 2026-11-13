---
tag: SPTQMA2H11
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 France Team Selection Test
    url: https://artofproblemsolving.com/community/c6h5877
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39057
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2004
    source: hf-ai-mo-aops
    label: 2004 France Team Selection Test
---
Let $P$ be the set of prime numbers. Consider a subset $M$ of $P$ with at least three elements. We assume that, for each non empty and finite subset $A$ of $M$ , with $A \neq M$ , the prime divisors of the integer $( \prod_{p \in A} ) - 1$ belong to $M$ .
Prove that $M = P$ .
