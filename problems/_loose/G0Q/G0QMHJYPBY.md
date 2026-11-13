---
tag: G0QMHJYPBY
kind: problem
type: answer
answer: (m, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $a$ and $b$, let $M(a,b)$ denote their greatest common divisor. Determine all pairs of positive integers $(m,n)$ such that for any two positive integers $x$ and $y$ such that $x\mid m$ and $y\mid n$,
$$M(x+y,mn)>1.$$

*Proposed by Ivan Novak*
