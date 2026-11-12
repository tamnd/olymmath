---
tag: X9TBGTNGWD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of real numbers $X_{1}, X_{2}$, $X_{3}, \ldots$ and a natural number $T$. Prove that if among all possible ordered $T$-element sets of the form ( $X_{k+1}$, $X_{k+2}, \ldots, X_{k+T}$ ) there are no more than $T$ different ones, then the sequence $X_{1}, X_{2}, X_{3}, \ldots$ is periodic.
