---
tag: 2CVGGZJ19H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $s(n)$ denote the sum of the digits of the natural number $n$ written in the decimal system. We know about the function $f$ defined on the non-negative integers that $f(0)=0$, and for any natural number $n$,

$$
f(n)=(f(n-s(n))+1
$$

Is it true that if $0 \leq n \leq m$, then $f(n) \leq f(m)$?
