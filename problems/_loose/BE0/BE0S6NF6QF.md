---
tag: BE0S6NF6QF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h226716
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1989
    source: hf-ai-mo-aops
    label: 1989 IMO Longlists
---
Let $ m$ be a positive integer and define $ f(m)$ to be the number of factors of $ 2$ in $ m!$ (that is, the greatest positive integer $ k$ such that $ 2^k|m!$ ). Prove that there are infinitely many positive integers $ m$ such that $ m - f(m) = 1989.$
