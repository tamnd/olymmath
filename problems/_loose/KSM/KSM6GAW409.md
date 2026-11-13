---
tag: KSM6GAW409
kind: problem
type: answer
answer: '[K: F] \leq [F(\alpha): F][F(\beta): F]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) If $K$ is a finite extension of the field $F$ and $K=F(\alpha,\beta)$ show that $[K: F]\leq [F(\alpha): F][F(\beta): F]$

b) If $gcd([F(\alpha): F],[F(\beta): F])=1$ then does the above inequality always become equality?

c) By giving an example show that if $gcd([F(\alpha): F],[F(\beta): F])\neq 1$ then equality might happen.
