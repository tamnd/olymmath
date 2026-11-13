---
tag: 52N5QVAMEP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h229142
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41391
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238044
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
Let $ \{k_n\}_{n = 1}^{\infty}$ be a sequence of real numbers having the properties $ k_1 > 1$ and $ k_1 + k_2 + \cdots + k_n < 2k_n$ for $ n = 1,2,...$ . Prove that there exists a number $ q > 1$ such that $ k_n > q^n$ for every positive integer $ n$ .
