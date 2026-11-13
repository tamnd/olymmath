---
tag: RSKS2BTV79
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h229169
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/1950
    source: hf-ai-mo-aops
    label: 1950 Miklós Schweitzer
---
Let $ A = (a_{ik})$ be an $ n\times n$ matrix with nonnegative elements such that $ \sum_{k = 1}^n a_{ik} = 1$ for $ i = 1,...,n$ .
Show that, for every eigenvalue $ \lambda$ of $ A$ , either $ |\lambda| < 1$ or there exists a positive integer $ k$ such that $ \lambda^k = 1$
