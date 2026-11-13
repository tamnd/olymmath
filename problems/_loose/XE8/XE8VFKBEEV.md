---
tag: XE8VFKBEEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Peru Cono Sur TST
    url: https://artofproblemsolving.com/community/c6h3108749
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50439
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-conosur-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Peru Cono Sur TST
---
Prove that there are no positive integers $a_1, a_2, \ldots , a_{2021}$ (not necessarily distinct) such that for $k = 1, 2, 3, \ldots , 2021$ the number of elements in the set $$ A_k = \{ j \in \mathbb{N} : 1 \le j \le 2021 \text{ and } a_j|k \} $$ be exactly $a_k$ .
