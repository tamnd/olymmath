---
tag: ZEG7CQM5CP
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=1, a_{2}=2, a_{2 k+1}=\frac{a_{2 k}^{2}}{a_{2 k-1}}$, and $a_{2 k+2}=2 a_{2 k+1}-a_{2 k}\left(k \in \mathbf{N}^{*}\right)$, then the last two digits of $a_{2022}$ are
