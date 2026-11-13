---
tag: PWXSM4DVF3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{N} \to \mathbb{N}$ such that for all $m,n \in \mathbb{N}$ holds $f(mn)=f(m)f(n)$ and $m+n \mid f(m)+f(n)$ .
