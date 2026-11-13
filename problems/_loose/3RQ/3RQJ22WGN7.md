---
tag: 3RQJ22WGN7
kind: problem
type: answer
answer: '|A| \text{ divides } n'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ S=\{1,2,\ldots,n\}$. Let $ A$ be a subset of $ S$ such that for $ x,y\in A$, we have $ x+y\in A$ or $ x+y-n\in A$. Show that the number of elements of $ A$ divides $ n$.
