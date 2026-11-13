---
tag: RZZH4BRV7K
kind: problem
type: answer
answer: "739"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of all $x$ from $2$ to $1000$ inclusive such that $$\prod_{n=2}^x \log_{n^n}(n+1)^{n+2}$$ is an integer.

*Proposed by Deyuan Li and Andrew Milas*
