---
tag: SV0SRG5XWR
kind: problem
type: answer
answer: 1+(n-1)(n+\sqrt{5}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=1, a_{n+1}=1+a_{n}+\sqrt{1+4 a_{n}}(n \in$ $\mathbf{N}^{*}$ ), then the general term of the sequence $a_{n}=$ $ $ .
