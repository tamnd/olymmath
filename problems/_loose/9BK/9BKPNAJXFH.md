---
tag: 9BKPNAJXFH
kind: problem
type: answer
answer: A^{64} B A B A B \cdots B A B
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a string of $99$ characters, $66$ of which are $A$ and $33$ are $B$. We call $S$ *good* if, for each $n$ such that $1\le n \le 99$, the sub-string made from the first $n$ characters of $S$ has an odd number of distinct permutations. How many good strings are there? Which strings are good?
