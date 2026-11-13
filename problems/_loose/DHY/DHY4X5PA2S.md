---
tag: DHY4X5PA2S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Bbb{Z}^+$ denote the set of positive integers. Find all functions $f:\Bbb{Z}^+\to \Bbb{Z}^+$ that satisfy the following condition: for each positive integer $n,$ there exists a positive integer $k$ such that $$\sum_{i=1}^k f_i(n)=kn,$$ where $f_1(n)=f(n)$ and $f_{i+1}(n)=f(f_i(n)),$ for $i\geq 1. $
