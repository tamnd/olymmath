---
tag: FYX89SCWX7
kind: problem
type: answer
answer: P(x) = ((2x)^2 + 3)((2x)^3 - 3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a polynomial $P(x)$ with integer coefficients and a prime $p$, if there is no $n \in \mathbb{Z}$ such that $p|P(n)$, we say that polynomial $P$ *excludes* $p$. Is there a polynomial with integer coefficients such that having degree of 5, excluding exactly one prime and not having a rational root?
