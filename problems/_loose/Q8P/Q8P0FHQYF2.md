---
tag: Q8P0FHQYF2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (2nd  Round)
    url: https://artofproblemsolving.com/community/c6h3074019
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=782
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (2nd  Round)
---
Prove that for any $2\le n \in \mathbb{N}$ there exists positive integers $a_1,a_2,\cdots,a_n$ such that $\forall i\neq j: \text{gcd}(a_i,a_j) = 1$ and $\forall i: a_i \ge 1402$ and the given relation holds. $$ [\frac{a_1}{a_2}]+[\frac{a_2}{a_3}]+\cdots+[\frac{a_n}{a_1}] = [\frac{a_2}{a_1}]+[\frac{a_3}{a_2}]+\cdots+[\frac{a_1}{a_n}] $$
