---
tag: YVMGZF8P4K
kind: problem
type: answer
answer: 2n+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n(n \geq 2)$, choose $m$ different numbers from $1, 2, \ldots, 3n$. Among these, there must be four pairwise distinct numbers $a, b, c, d$, satisfying $a=b+c+d$. Find the minimum value of $m$.
