---
tag: X4RXHBQK9H
kind: problem
type: answer
answer: 4^{n-1}+2^n(2^{n-1}-n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a cross a table composed of the union of one $a \times 1$ table and one $1 \times b$ table that have exactly one common field ($a, b \in \mathbb{N}$). A set of some fields of such a table is called a connected area if from any field in this set, one can reach any other field by moving only to adjacent fields within the observed set (adjacent fields are those that share a side). For a given natural number $n$, determine the number of ways in which the numbers $1,2, \ldots, n$ can be written into some cross with $n$ fields (the cross is not predefined), each number in exactly one field, under the condition that for each $k, k \in\{1,2, \ldots, n\}$, the fields in which the numbers $1,2, \ldots, k$ are written form a connected area.
