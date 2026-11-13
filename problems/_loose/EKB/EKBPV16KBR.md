---
tag: EKBPV16KBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\{a_{n}\}_{n \ge 1}$ is defined by $$a_{1}=1, a_{2}=12, a_{3}=20, a_{n+3}= 2a_{n+2}+2a_{n+1}-a_{n}.$$ Prove that $1+4a_{n}a_{n+1}$ is a square for all $n \in \mathbb{N}$.
