---
tag: RTNX90Q6KZ
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the number of non-empty subsets $S$ of $\{-3, -2, -1, 0, 1, 2, 3\}$ with the following property: for any $k \ge 1$ distinct elements $a_1, \dots, a_k \in S$ we have $a_1 + \dots + a_k \neq 0$.

*Proposed by Evan Chen*
