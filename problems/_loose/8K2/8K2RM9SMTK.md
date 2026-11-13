---
tag: 8K2RM9SMTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 HKIMO Preliminary Selection Contest
    url: https://artofproblemsolving.com/community/c6h1078164
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40699
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2002
    source: hf-ai-mo-aops
    label: 2002 HKIMO Preliminary Selection Contest
---
Let $A_1A_2\cdots A_{2002}$ be a regular 2002 sided polygon. Each vertex $A_i$ is associated with a positive integer $a_i$ such that the following condition is satisfied: If $j_1,j_2,\cdots, j_k$ are positive integers such that $k<500$ and $A_{j_1}, A_{j_2}, \cdots A_{j_k}$ is a regular $k$ sided polygon, then the values of $a_{j_1},A_{j_2}, \cdots A_{j_k}$ are all different. Find the smallest possible value of $a_1+a_2+\cdots a_{2002}$
