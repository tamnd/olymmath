---
tag: 4FNAFRNTFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h246427
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25695
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2005
    source: hf-ai-mo-aops
    label: 2005 International Zhautykov Olympiad
---
Let $ r$ be a real number such that the sequence $ (a_{n})_{n\geq 1}$ of positive real numbers satisfies the equation $ a_{1} + a_{2} + \cdots + a_{m + 1} \leq r a_{m}$ for each positive integer $ m$ . Prove that $ r \geq 4$ .
