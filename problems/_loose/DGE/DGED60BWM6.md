---
tag: DGED60BWM6
kind: problem
type: answer
answer: a_{2021}>\sqrt{4043}>60
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A numerical sequence is defined by the relation: $a_{0}=1, a_{k+1}=a_{k}+\frac{1}{a_{k}}$. Prove that $a_{2021}>60$.
