---
tag: KT6CE6DDQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a binary matrix $M$(all entries are $0$ or $1$) on $r$ rows and $c$ columns, where every row and every column contain at least one entry equal to $1$. Prove that there exists an entry $M(i,j) = 1$, such that the corresponding row-sum $R(i)$ and column-sum $C(j)$ satisfy $r R(i)\ge c C(j)$.
(Proposed by Gerhard Woeginger, Austria)
