---
tag: KTTAAGEAJH
kind: problem
type: answer
answer: "27"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $8 \times 12$ table, some $N$ cells are black, and the rest are white. In one operation, it is allowed to paint three cells forming a three-cell corner to white (some of them could already be white before repainting). It turned out that it is impossible to make the entire table white in fewer than 25 such operations. Find the smallest possible value of $N$.
