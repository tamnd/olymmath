---
tag: 95BNVPZQ4K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2967181
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53854
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2020
    source: hf-ai-mo-aops
    label: 2020 Romania EGMO TST
---
Determine if for any positive integers $a,b,c$ there exist pairwise distinct non-negative integers $A,B,C$ which are greater than $2019$ such that $a+A,b+B$ and $c+C$ divide $ABC$ .
