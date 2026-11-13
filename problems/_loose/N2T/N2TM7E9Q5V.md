---
tag: N2TM7E9Q5V
kind: problem
type: answer
answer: \dim(W) = \dim(W \cap W_1) + \dim(W \cap W_2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $W,W_1$ and $W_2$ are subspaces of a vector space $V$ such that $V=W_1\oplus W_2$. Under what conditions we have

$W=(W\cap W_1)\oplus(W\cap W_2)$?
