---
tag: W1XFSNSZG1
kind: problem
type: answer
answer: k = 2^9 \times m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204896
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer and $S$ be a set of sets which have $k$ elements. For every $A,B \in S$ and $A\neq B$ we have $A \Delta B \in S$. Find all values of $k$ when $|S|=1023$ and $|S|=2023$.

Note:$A \Delta B = (A \setminus B) \cup (B \setminus A)$
