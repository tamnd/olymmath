---
tag: D1DQBRCJE0
kind: problem
type: answer
answer: U_{n}+U_{n+1}=(n+1)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $U_{n}$ of integers, for which $U_{1}=1, U_{k}=U_{k-1}+k$. Prove that $U_{n}+U_{n+1}=(n+1)^{2}$.
