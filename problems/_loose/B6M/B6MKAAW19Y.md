---
tag: B6MKAAW19Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $(x_n)_{n\in\mathbb{N^*}}$ such that $$x_0=0, x_1=2024, x_n=x_{n-1}+x_{n-2}, \forall n\geq2.$$ Prove that there is an infinity of terms in this sequence that end with $2024.$
