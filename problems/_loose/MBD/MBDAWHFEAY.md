---
tag: MBDAWHFEAY
kind: problem
type: answer
answer: k + 2 \leq m
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $k$. Find the condition of positive integer $m$ over $k$ such that there exists only one positive integer $n$ satisfying $$n^m | 5^{n^k} + 1,$$
