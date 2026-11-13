---
tag: DZB3HFRPJG
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $n^{2}$ unit squares in the $x y$-plane centred at point $(i, j)$ with integer coordinates, $1 \leq i \leq n, 1 \leq j \leq n$. It is required to colour each unit square in such a way that whenever $1 \leq i<j \leq n$ and $1 \leq k<l \leq n$, the three squares with centres at $(i, k),(j, k),(j, l)$ have distinct colours. What is the least possible number of colours needed?
