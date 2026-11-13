---
tag: KG9MXV5SAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Danube Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h1880101
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22641
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2014
    source: hf-ai-mo-aops
    label: 2014 Danube Mathematical Competition
---
Consider the real numbers $a_1,a_2,...,a_{2n}$ whose sum is equal to $0$ . Prove that among pairs $(a_i,a_j) , i<j$ where $ i,j \in \{1,2,...,2n\} $ .there are at least $2n-1$ pairs with the property that $a_i+a_j\ge 0$ .
