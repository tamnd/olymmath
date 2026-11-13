---
tag: SFQMW7ZPDC
kind: problem
type: answer
answer: 2^{k}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In one row, $n$ columns of checkers are arranged such that between any two columns of height $st$, there is a taller column. (All stones have the same height, and some columns may consist of a single stone.) The tallest column contains $k$ stones. For a given $k$, determine the greatest possible value of $n$.
