---
tag: M2RV8YW1E5
kind: problem
type: answer
answer: All polynomials in two variables of total degree at most d.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d$ be a nonnegative integer. Determine all functions $f : \mathbb{R}^2 \to \mathbb{R}$ such that, for any real constants $A$, $B$, $C$ and $D$, $f(At+B, Ct+D)$ is a polynomial in $t$ of degree at most $d$.
