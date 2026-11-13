---
tag: TKKS6M31TW
kind: problem
type: answer
answer: 2^{2^{n}}-1<2^{2^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $a_{1}=3, a_{n+1}=\left(a_{n}-1\right)^{2}+1$, prove: $\prod_{k=1}^{n} a_{k}<2^{2^{n}}$.
